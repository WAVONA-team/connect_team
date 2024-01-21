import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const requiredPeopleRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        projectId: z.string().trim(),
        requiredPeople: z.string().trim(),
      }),
    )

    .mutation(async ({ ctx, input }) => {
      return ctx.db.requiredPeopleState.create({
        data: {
          projectId: input.projectId,
          requiredPeople: input.requiredPeople,
        },
      });
    }),

  delete: protectedProcedure
    .input(z.string().trim())
    .mutation(async ({ ctx, input }) => {
      return ctx.db.requiredPeopleState.delete({
        where: {
          id: input,
        },
      });
    }),

  change: protectedProcedure
    .input(
      z.object({
        requiredPeople: z.string().trim(),
        id: z.string().trim(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.requiredPeopleState.update({
        where: {
          id: input.id,
        },
        data: {
          requiredPeople: input.requiredPeople,
        },
      });
    }),

  findById: publicProcedure
    .input(z.string().trim())
    .query(async ({ ctx, input }) => {
      return ctx.db.requiredPeopleState.findUnique({
        where: {
          id: input,
        },
        include: {
          project: true,
        },
      });
    }),
  findByProjectId: publicProcedure
    .input(z.string().trim())
    .query(async ({ ctx, input }) => {
      return ctx.db.requiredPeopleState.findMany({
        where: {
          projectId: input,
        },
        include: {
          project: true,
        },
      });
    }),
});
