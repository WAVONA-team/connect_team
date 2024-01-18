"use client";
import React from "react";
import classNames from "classnames";
import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";

import getFilteredProjects from "./helpers/getFilteredProjects";
import type NewProject from "@/shared/types/extendedModels/NewProject";

import ProjectCard from "@/modules/projectCard/ProjectCard";
import ResponseModal from "@/modules/responseModal/ResponseModal";

import MainButton from "@/ui/mainButton/MainButton";

type Props = {
  projects: NewProject[];
};

const ProjectList: React.FC<Props> = React.memo(({ projects }) => {
  const searchParams = useSearchParams()!;
  const { data: session } = useSession();
  const router = useRouter();

  const professions = searchParams.getAll("professions") ?? [];
  const whosProjects = searchParams.getAll("whosProjects") ?? [];
  const timeFrame = searchParams.get("timeFrame") ?? "";
  const duration = searchParams.get("duration") ?? "";
  const status = searchParams.get("status") ?? "";
  const view = searchParams.get("view") ?? "grid";
  const projectId = searchParams.get("responseProjectId") ?? "";

  const filteredProjects = getFilteredProjects(
    projects,
    {
      professions,
      whosProjects,
      timeFrame,
      duration,
      status,
    },
    session,
  );

  return (
    <div
      className={classNames("mt-8 gap-6", {
        "grid grid-cols-2": view === "grid",
        "flex flex-col": view !== "grid",
      })}
    >
      {filteredProjects.length ? (
        filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} href={project.id} />
        ))
      ) : (
        <div className="flex flex-col items-start gap-2">
          <p className="text-base text-secondary-cadet-grey">
            К сожалению, по Вашему запросу проектов не найдено
          </p>

          <MainButton
            text="Сбросить фильтры"
            onClick={() => router.push("/projects")}
          />
        </div>
      )}

      {!!projectId.length && (
        <ResponseModal
          projectId={projectId}
          projects={projects}
          active={true}
        />
      )}
    </div>
  );
});

export default ProjectList;
