import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const notificationRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        message: z.string().trim(),
        link: z.string().trim(),
        image: z.string().trim(),
        userId: z.string().trim(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.notification.create({
        data: {
          message: input.message,
          link: input.link,
          image: input.image,
          userId: input.image,
        },
      });
    }),

  delete: protectedProcedure
    .input(z.string().trim())
    .mutation(async ({ ctx, input }) => {
      return ctx.db.notification.delete({
        where: {
          id: input,
        },
      });
    }),
  findById: publicProcedure
    .input(z.string().trim())
    .query(async ({ ctx, input }) => {
      return ctx.db.notification.findUnique({
        where: {
          id: input,
        },
      });
  }),
  findByUserId: publicProcedure
    .input(z.string().trim())
    .query(async ({ ctx, input }) => {
      return ctx.db.notification.findMany({
        where: {
          userId: input,
        },
      });
    }),
});
