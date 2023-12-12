import { type PropsWithChildren } from "react";
import { cookies } from "next/headers";
import { TRPCReactProvider } from "../../trpc/react";

const Providers: React.FC<PropsWithChildren> = async ({ children }) => {
  return (
    <TRPCReactProvider cookies={cookies().toString()}>
      {children}
    </TRPCReactProvider>
  );
};

export default Providers;
