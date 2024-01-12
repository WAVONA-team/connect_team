import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const projectRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        title: z.string().trim(),
        description: z.string().trim(),
        status: z.string().trim(),
        term: z.string().trim(),
        deadline: z.string().trim(),
        image: z.string().trim(),
        published: z.string().trim(),
        target: z.string().trim(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.project.create({
        data: {
          title: input.title,
          description: input.description,
          userId: ctx.session.user.id,
          status: input.status,
          term: input.status,
          deadline: input.deadline,
          image: input.image,
          published: input.published,
          target: input.target,
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
        include: {
          responses: true,
          creator: true,
          members: true,
          requiredPeople: true,
        }
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
