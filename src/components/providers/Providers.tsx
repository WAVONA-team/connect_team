import { PropsWithChildren } from "react";
import { cookies } from "next/headers";
import { TRPCReactProvider } from "../../trpc/react";
import SessionProvider from "@/shared/SessionProvider";
import { getServerSession } from "next-auth";

const Providers: React.FC<PropsWithChildren> = async ({ children }) => {
  const session = await getServerSession();
  return (
    <SessionProvider session={session}>
      <TRPCReactProvider cookies={cookies().toString()}>
        {children}
      </TRPCReactProvider>
    </SessionProvider>
  );
};

export default Providers;
