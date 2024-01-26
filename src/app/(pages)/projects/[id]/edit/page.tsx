import { api } from "@/trpc/server";

import Container from "@/ui/container/Container";
import SectionWrapper from "@/ui/sectionWrapper/SectionWrapper";
import NavBar from "@/components/navBar/NavBar";
import { getServerAuthSession } from "@/server/auth";
import { notFound } from "next/navigation";
import ProjectForm from "@/modules/projectForm/ProjectForm";

interface Props {
  params: {
    id: string;
  };
}

const ProjectEdit: React.FC<Props> = async ({ params }) => {
  const sessionPromise = getServerAuthSession();
  const projectPromise = api.project.findById.query(params.id);

  const [session, project] = await Promise.all([
    sessionPromise,
    projectPromise,
  ]);

  if (!project || session?.user.id !== project?.userId) {
    return notFound();
  }

  return (
    <Container>
      <NavBar />
      <SectionWrapper className=" mt-12 text-onPrimary-anti-flash-withe">
        <ProjectForm project={project} />
      </SectionWrapper>
    </Container>
  );
};

export default ProjectEdit;
