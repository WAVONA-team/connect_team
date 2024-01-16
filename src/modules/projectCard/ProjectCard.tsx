/* eslint-disable @typescript-eslint/no-unsafe-enum-comparison */
import React from "react";
import classNames from "classnames";

import type NewProject from "@/shared/types/extendedModels/NewProject";

import SectionWrapper from "@/ui/sectionWrapper/SectionWrapper";
import Badge from "@/ui/badge/Badge";
import Status from "@/shared/types/projectFilter/Status";
import Link from "next/link";
import { useSession } from "next-auth/react";
import MainButton from "@/ui/mainButton/MainButton";

type Props = {
  project: NewProject;
  href: string;
};

const ProjectCard: React.FC<Props> = React.memo(({ project, href }) => {
  const { requiredPeople, title, status, target, creator, responses } = project;
  const { data: session } = useSession();

  const SubmitResponseClick = () => {
    console.log("response");
  };

  return (
    <Link href={`/pages/projects/${href}`}>
      <SectionWrapper className="h-full">
        <div className="flex items-center gap-3">
          {[...new Set(requiredPeople)]
            .sort((a, b) => a.profession.localeCompare(b.profession))
            .map((person) => {
              const { profession, numberOfRequiredPeople, id } = person;

              return (
                <Badge
                  key={id}
                  text={profession}
                  counterValue={numberOfRequiredPeople}
                  className="pointer-events-none"
                />
              );
            })}
        </div>

        <h2 className="mt-6 block text-xl font-semibold text-onPrimary-anti-flash-withe">
          {title}
        </h2>

        <div className="mt-4">
          <p className="text-base text-secondary-cadet-grey">Цель</p>

          <p className="mt-4 block text-base text-onPrimary-anti-flash-withe">
            {target}
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <p className="text-base text-secondary-cadet-grey">Длительность:</p>

            <div className="flex items-center gap-2 text-onPrimary-anti-flash-withe">
              <p>{project.published.toLocaleDateString()}</p>
              <p>-</p>
              <p>{project.deadline.toLocaleDateString()}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <p className="text-base text-secondary-cadet-grey">Статус:</p>
            <p
              className={classNames({
                "text-orange-500":
                  status === Status.InProgress || status === Status.Planning,
                "text-accent-spring-bud": status === Status.Completed,
              })}
            >
              {status}
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          {session?.user.id === creator.id ? (
            <p className="py-3.5 text-sm text-onPrimary-anti-flash-withe">
              {responses.length} откликов
            </p>
          ) : (
            <MainButton
              text="Откликнуться"
              disabled={!session}
              onClick={SubmitResponseClick}
            />
          )}

          <p className="text-base text-onPrimary-anti-flash-withe">
            {project.published.toLocaleDateString()}
          </p>
        </div>
      </SectionWrapper>
    </Link>
  );
});
export default ProjectCard;
