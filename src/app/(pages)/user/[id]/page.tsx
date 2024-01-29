import React from "react";
import { api } from "@/trpc/server";
import { type Metadata } from "next";

import UserPage from "@/modules/userPage/UserPage";
import NavBar from "@/components/navBar/NavBar";
import Container from "@/ui/container/Container";

interface Props {
  params: {
    id: string;
  };
}

const User: React.FC<Props> = async ({ params }) => {
  return (
    <Container>
      <NavBar />

      <UserPage userId={params.id} />
    </Container>
  );
};

export default User;

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const user = await api.user.get.query({ id: params.id });
  return {
    title: `${user?.name} profile`,
  };
};
