"use client";
import React from "react";
import createSearchParams from "@/shared/helpers/createSearchParams";
import MainButton from "@/ui/mainButton/MainButton";
import { useRouter, useSearchParams } from "next/navigation";
import type NewProject from "@/shared/types/extendedModels/NewProject";
import ResponseModal from "@/modules/responseModal/ResponseModal";
import { api } from "@/trpc/react";
import { useSession } from "next-auth/react";

type Props = {
  projectId: string;
  projects: NewProject[];
  className?: string;
};

const OpenModalButton: React.FC<Props> = React.memo(
  ({ projectId, projects, className }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { data: session } = useSession();

    const responses = api.response.getAll.useQuery().data;

    const isUserResponsed = responses?.some(
      (response) => response.userId === session?.user.id,
    );

    return (
      <>
        <MainButton
          className={className}
          text={isUserResponsed ? "Вы откликнулись!" : "Откликнуться"}
          disabled={isUserResponsed}
          onClick={() => {
            router.push(
              createSearchParams(
                { responseProjectId: projectId },
                searchParams,
              ),
            );
          }}
        />

        <ResponseModal
          active={!!searchParams.get("responseProjectId")}
          projectId={projectId}
          projects={projects}
        />
      </>
    );
  },
);

export default OpenModalButton;
