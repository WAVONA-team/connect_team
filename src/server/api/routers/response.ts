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
        profession: z.string().trim(),
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
          profession: input.profession,
        },
      });
    }),

  getAll: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.db.response.findMany();
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

  accept: protectedProcedure
    .input(
      z.object({
        responseId: z.string().trim(),
        projectId: z.string().trim(),
        userId: z.string().trim(),
        status: z.string().trim(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.response.update({
        where: {
          id: input.responseId,
        },
        data: {
          status: input.status,
        },
      });

      const projectToUpdate = await ctx.db.project.findUnique({
        where: { id: input.projectId },
        include: { members: true },
      });

      const newMember = await ctx.db.user.findUnique({
        where: { id: input.userId },
      });

      return await ctx.db.project.update({
        where: {
          id: input.projectId,
        },
        data: {
          members: {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            set: [...projectToUpdate.members, newMember],
          },
        },
      });
    }),

  reject: protectedProcedure
    .input(
      z.object({
        status: z.string().trim(),
        id: z.string().trim(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.response.update({
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
        include: {
          project: true,
          candidate: true,
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
        include: {
          project: true,
          candidate: true,
        },
      });
    }),
});
