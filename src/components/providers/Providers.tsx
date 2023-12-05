import React from 'react';
import { cookies } from 'next/headers';
import { TRPCReactProvider } from '../../trpc/react';

type Props = {
  children: React.ReactNode,
};

const Providers: React.FC<Props> = React.memo(({ children }) => {
  return (
    <TRPCReactProvider cookies={cookies().toString()}>
      {children}
    </TRPCReactProvider>
  );
});

export default Providers;
