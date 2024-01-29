"use client";

import React from "react";
import { api } from "@/trpc/react";

import SecondaryButton from "@/ui/secondaryButton/SecondaryButton";

type Props = {
  responseId: string;
};

const RejectResponseButton: React.FC<Props> = React.memo(({ responseId }) => {
  const rejectResponse = api.response.reject.useMutation();

  return (
    <SecondaryButton
      text="Отказать"
      onClick={() => {
        rejectResponse.mutate({
          id: responseId,
          status: "Отклонен",
        });
      }}
    />
  );
});

export default RejectResponseButton;
