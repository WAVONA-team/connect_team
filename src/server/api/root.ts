import { createTRPCRouter } from "@/server/api/trpc";
import { projectRouter } from "./routers/project";
import { responseRouter } from "./routers/response";
import { userRouter } from "./routers/user";
import { requiredPeopleRouter } from './routers/requiredPeople'

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  user: userRouter,
  project: projectRouter,
  response: responseRouter,
  requiredPeople: requiredPeopleRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
