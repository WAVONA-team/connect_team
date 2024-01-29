"use client";

import React from "react";
import MainButton from "@/ui/mainButton/MainButton";
import { api } from "@/trpc/react";

type Props = {
  responseId: string;
  projectId: string;
  userId: string;
};

const AcceptResponseButton: React.FC<Props> = React.memo(
  ({ responseId, projectId, userId }) => {
    const acceptResponse = api.response.accept.useMutation();

    return (
      <MainButton
        text="Пригласить"
        onClick={() => {
          acceptResponse.mutate({
            responseId,
            projectId,
            userId,
            status: "Принят",
          });
        }}
      />
    );
  },
);

export default AcceptResponseButton;
