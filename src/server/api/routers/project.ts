import { z } from 'zod';
import { createTRPCRouter,protectedProcedure,publicProcedure } from '../trpc';

export const projectRouter = createTRPCRouter({
  createProject: protectedProcedure
  .input(
    z.object({
      title: z.string().trim(),
      description: z.string().trim(),
    })
  )
  .query(async ({ ctx, input }) => {
    return ctx.db.project.create({
      data: {
        title: input.title,
        description: input.description,
        userId: ctx.session.user.id
      },
    });
  }),

  deleteProject: protectedProcedure
    .input(z.string().trim())
    .query(async ({ ctx, input }) => {
      return ctx.db.project.delete({
        where: {
          id: input,
        },
      });
    }),

  changeProjectInfo: protectedProcedure
    .input(z.object({
      title: z.string().trim(),
      description: z.string(),
      id: z.string().trim(),
    }))
    .query(async ({ ctx, input }) => {
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

  searchProjectById: publicProcedure
    .input(z.string().trim())
    .query(async ({ ctx, input }) => {
      return ctx.db.project.findUnique({
        where: {
          id: input,
        },
      });
    }),
  searchProjectByTitle: publicProcedure
    .input(z.string().trim())
    .query(async ({ ctx, input }) => {
      return ctx.db.project.findMany({
        where: {
          title: input,
        },
      });
  }),
  searchAllProjects: publicProcedure
    .input(z.string().trim())
    .query(async ({ ctx }) => {
      return ctx.db.project.findMany();
    }),
});
