import { z } from 'zod';
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from '../trpc';

export const userRouter = createTRPCRouter({
  createUser: publicProcedure
    .input(
      z.object({
        email: z.string().trim().email(),
        name: z.string().trim(),
      })
    )
    .query(async ({ ctx, input }) => {
      return ctx.db.user.create({
        data: {
          email: input.email,
          name: input.name,
        },
      });
    }),

  deleteUser: protectedProcedure
    .input(z.string().trim())
    .query(async ({ ctx, input }) => {
      return ctx.db.user.delete({
        where: {
          id: input,
        },
      });
    }),

  updateUser: protectedProcedure
    .input(z.object({
      email: z.optional(z.string().trim().email()),
      name: z.optional(z.string().trim()),
      id: z.string().trim(),
    }))
    .query(async ({ ctx, input }) => {
      return ctx.db.user.update({
        where: {
          id: input.id,
        },
        data: {
          email: input.email,
          name: input.name,
        },
      });
    }),

  getUser: publicProcedure
    .input(z.string().trim())
    .query(async ({ ctx, input }) => {
      return ctx.db.user.findUnique({
        where: {
          id: input,
        },
      });
    }),
});
