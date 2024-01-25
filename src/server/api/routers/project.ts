import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const projectRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        image: z.string().trim(),
        title: z.string().trim(),
        target: z.string().trim(),
        description: z.string().trim(),
        status: z.string().trim(),
        term: z.string().trim(),
        deadline: z.date(),
        published: z.date(),
        preferredTypeOfCommunication: z.string().trim(),
        email: z.string().trim(),
        telegram: z.string().trim(),
        discord: z.string().trim(),
        site: z.string().trim(),
        requiredPeople: z.string().trim(),
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
          preferredTypeOfCommunication: input.preferredTypeOfCommunication,
          email: input.email,
          telegram: input.telegram,
          discord: input.discord,
          site: input.site,
          status: input.status,
          userId: ctx.session.user.id,
          published: input.published,
          requiredPeople: input.requiredPeople,
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
      const project = await ctx.db.project.findUnique({
        where: {
          id: input,
        },
        include: {
          responses: true,
          creator: true,
          members: true,
        },
      });

      if (project === null) {
        return null;
      }

      return {
        ...project,
        requiredPeople: JSON.parse(project.requiredPeople) as Record<
          string,
          number
        >,
      };
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

  getAll: publicProcedure.query(async ({ ctx }) => {
    const allProjects = await ctx.db.project.findMany({
      include: {
        creator: true,
        members: true,
        responses: true,
      },
    });

    return allProjects.map((project) => ({
      ...project,
      requiredPeople: JSON.parse(project.requiredPeople) as Record<
        string,
        number
      >,
    }));
  }),
});
