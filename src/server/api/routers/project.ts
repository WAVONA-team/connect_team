import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const projectRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        title: z.string().trim(),
        description: z.string().trim(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.project.create({
        data: {
          title: input.title,
          description: input.description,
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
    .mutation(async ({ ctx, input }) => {
      return ctx.db.project.findUnique({
        where: {
          id: input,
        },
      });
    }),
  searchByTitle: publicProcedure
    .input(z.string().trim())
    .mutation(async ({ ctx, input }) => {
      return ctx.db.project.findMany({
        where: {
          title: input,
        },
      });
    }),
  getAll: publicProcedure.input(z.string().trim()).mutation(async ({ ctx }) => {
    return ctx.db.project.findMany();
  }),
});
