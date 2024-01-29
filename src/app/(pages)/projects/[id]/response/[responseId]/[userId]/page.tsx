import React from "react";
import { api } from "@/trpc/server";

import NavBar from "@/components/navBar/NavBar";
import UserPage from "@/modules/userPage/UserPage";
import RejectResponseButton from "@/components/rejectResponseButton/RejectResponseButton";
import AcceptResponseButton from "@/components/acceptResponseButton/AcceptResponseButton";

import Container from "@/ui/container/Container";

interface Props {
  params: {
    id: string;
    responseId: string;
    userId: string;
  };
}

const responsePage: React.FC<Props> = React.memo(async ({ params }) => {
  const { id: projectId, responseId, userId } = params;

  const project = await api.project.findById.query(projectId);
  const response = await api.response.findById.query(responseId);

  const isAccepted = project?.members.some((member) => member.id === userId);

  return (
    <Container>
      <NavBar />

      {!isAccepted && (
        <div className="mt-8 flex items-center gap-6">
          <AcceptResponseButton
            responseId={responseId}
            projectId={projectId}
            userId={userId}
          />

          <RejectResponseButton responseId={responseId} />
        </div>
      )}

      <UserPage
        isAccepted={isAccepted}
        userId={userId}
        coverLetter={response?.message ?? ""}
      />
    </Container>
  );
});

export default responsePage;
