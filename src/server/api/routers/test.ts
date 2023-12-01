import { z } from 'zod';
import {
  createTRPCRouter,
  publicProcedure,
} from '@/server/api/trpc';

export const testRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.task.findMany();
  }),

  create: publicProcedure
    .input(z.object({ task: z.string().min(1), done: z.boolean() }))
    .mutation(({ ctx, input }) => {
      return ctx.db.task.create({
        data: {
          task: input.task,
          done: input.done,
        },
      });
    }),

  delete: publicProcedure
    .input(z.object({ id: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.task.delete({
        where: {
          id: input.id,
        },
      });
    }),

  update: publicProcedure
    .input(z.object({ id: z.string().min(1), done: z.boolean() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.task.update({
        where: { id: input.id },
        data: { done: input.done },
      });
    }),
});
