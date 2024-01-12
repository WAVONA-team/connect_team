import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const responseRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        projectId: z.string().trim(),
        status: z.string().trim(),
        date: z.string().trim(),
        message: z.string().trim(),
      }),
    )

    .mutation(async ({ ctx, input }) => {
      return ctx.db.response.create({
        data: {
          projectId: input.projectId,
          userId: ctx.session.user.id,
          status: input.status,
          date: input.date,
          message: input.message,
        },
      });
    }),

  delete: protectedProcedure
    .input(z.string().trim())
    .mutation(async ({ ctx, input }) => {
      return ctx.db.response.delete({
        where: {
          id: input,
        },
      });
    }),

  change: protectedProcedure
    .input(
      z.object({
        status: z.string().trim(),
        id: z.string().trim(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.response.update({
        where: {
          id: input.id,
        },
        data: {
          status: input.status,
        },
      });
    }),

  findById: publicProcedure
    .input(z.string().trim())
    .query(async ({ ctx, input }) => {
      return ctx.db.response.findUnique({
        where: {
          id: input,
        },
      });
    }),
  findByUserId: publicProcedure
    .input(z.string().trim())
    .query(async ({ ctx, input }) => {
      return ctx.db.response.findMany({
        where: {
          userId: input,
        },
        include: {
          project: true,
          candidate: true,
        },
      });
    }),
  findByProjectId: publicProcedure
    .input(z.string().trim())
    .query(async ({ ctx, input }) => {
      return ctx.db.response.findMany({
        where: {
          projectId: input,
        },
      });
    }),
});
