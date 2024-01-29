import React from "react";

import Link from "next/link";
import SectionWrapper from "@/ui/sectionWrapper/SectionWrapper";
interface Project {
  id: string;
  title: string;
  description: string | null;
  term: string;
  status: string;
  published: Date;
}

type Props = {
  project: Project;
  role: string;
};

const ProjectCard: React.FC<Props> = React.memo(({project, role}) => {
  return (
    <Link href={`/projects/${project.id}`} className=" wflex  gap-6">
      <SectionWrapper className="flex flex-col gap-4">
        <div className=" flex justify-between">
          <p className="text-xl font-bold">{project.title}</p>
          <p className="text-sm">{role}</p>
        </div>
        <div>
          <p className=" text-sm text-secondary-cadet-grey">Описание</p>
          <p>{project.description}</p>
        </div>
        <p className="text-sm">Длительность: {project.term}</p>
        <div className=" flex justify-between">
          <p className="text-sm">Статус: {project.status}</p>
          <p className="text-sm">{project.published.toString()}</p>
        </div>
      </SectionWrapper>
    </Link>
  );
});
export default ProjectCard;
