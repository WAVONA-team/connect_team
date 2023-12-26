import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const projectRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        image: z.string().trim(),
        title: z.string().trim(),
        deadline: z.string().trim(),
        term: z.string().trim(),
        target: z.string().trim(),
        description: z.string().trim(),
        email: z.string().email().trim(),
        telegram: z.string().trim(),
        discord: z.string().trim(),
        site: z.string().trim(),
        status: z.string().trim(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.project.create({
        data: {
          image: input.image,
          title: input.title,
          deadline: input.deadline,
          term: input.term,
          target: input.target,
          description: input.description,
          email: input.email,
          telegram: input.telegram,
          discord: input.discord,
          site: input.site,
          status: input.status,
          userId: ctx.session.user.id,
        },
      });
    }),

  delete: protectedProcedure
    .input(z.string().trim())
    .mutation(async ({ ctx, input }) => {
      return ctx.db.project.delete({
        where: {
          id: input,
        },
      });
    }),

  change: protectedProcedure
    .input(
      z.object({
        title: z.string().trim(),
        description: z.string(),
        id: z.string().trim(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.project.update({
        where: {
          id: input.id,
        },
        data: {
          title: input.title,
          description: input.description,
        },
      });
    }),

  findById: publicProcedure
    .input(z.string().trim())
    .query(async ({ ctx, input }) => {
      return ctx.db.project.findUnique({
        where: {
          id: input,
        },
      });
    }),
  searchByTitle: publicProcedure
    .input(z.string().trim())
    .query(async ({ ctx, input }) => {
      return ctx.db.project.findMany({
        where: {
          title: input,
        },
      });
    }),
  getAll: publicProcedure
    .query(async ({ ctx }) => {
      return ctx.db.project.findMany();
    })
});
