import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        email: z.string().trim().email(),
        name: z.string().trim(),
        image: z.string().trim(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.user.create({
        data: {
          email: input.email,
          name: input.name,
          image: input.image,
        },
      });
    }),

  delete: protectedProcedure
    .input(
      z.object({
        id: z.string().trim(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.user.delete({
        where: {
          id: input.id,
        },
      });
    }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.string().trim(),
        name: z.string().trim(),
        profession: z.string().trim(),
        city: z.string().trim(),
        isVisibleForTeam: z.boolean(),
        age: z.string().trim(),
        languages: z.string().trim(),
        email: z.string().trim(),
        preferredTypeOfCommunication: z.string().trim(),
        telegram: z.string().trim(),
        discord: z.string().trim(),
        description: z.string().trim(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.user.update({
        where: {
          id: input.id,
        },
        data: {
          name: input.name,
          profession: input.profession,
          city: input.city,
          isVisibleForTeam: input.isVisibleForTeam,
          age: +input.age,
          languages: input.languages,
          email: input.email,
          telegram: input.telegram,
          discord: input.discord,
          description: input.description,
        },
      });
    }),

  get: publicProcedure
    .input(
      z.object({
        id: z.string().trim(),
      }),
    )
    .query(async ({ ctx, input }) => {
      return ctx.db.user.findUnique({
        where: {
          id: input.id,
        },
        include: {
          memberOfProjects: true,
          createdProjects: true
        }
      });
    }),
});
