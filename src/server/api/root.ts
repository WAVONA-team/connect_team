import { createTRPCRouter } from '@/server/api/trpc';

import { homeRouter } from './routers/home';
import { publicPageRouter } from './routers/publicPage';

export const appRouter = createTRPCRouter({
  home: homeRouter,
  public: publicPageRouter,
});

export type AppRouter = typeof appRouter;
