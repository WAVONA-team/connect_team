"use client";

import React from "react";
import MainButton from "@/ui/mainButton/MainButton";
import { api } from "@/trpc/react";
import { useRouter } from "next/navigation";

type Props = {
  responseId: string;
  projectId: string;
  userId: string;
};

const AcceptResponseButton: React.FC<Props> = React.memo(
  ({ responseId, projectId, userId }) => {
    const acceptResponse = api.response.accept.useMutation();
    const router = useRouter();

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

          router.push(`/projects/${projectId}`);
        }}
      />
    );
  },
);

export default AcceptResponseButton;
