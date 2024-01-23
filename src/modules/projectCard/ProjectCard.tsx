/* eslint-disable @typescript-eslint/no-unsafe-enum-comparison */
import React from "react";
import classNames from "classnames";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

import type NewProject from "@/shared/types/extendedModels/NewProject";

import Status from "@/shared/types/projectFilter/Status";
import SectionWrapper from "@/ui/sectionWrapper/SectionWrapper";
import Badge from "@/ui/badge/Badge";
import MainButton from "@/ui/mainButton/MainButton";
import Link from "next/link";
import createSearchParams from "@/shared/helpers/createSearchParams";

type Props = {
  project: NewProject;
  href: string;
};

const ProjectCard: React.FC<Props> = React.memo(({ project, href }) => {
  const { requiredPeople, title, status, target, creator, responses, members } =
    project;
  const { data: session } = useSession();

  const router = useRouter();
  const searchParams = useSearchParams()!;

  return (
    <Link href={`/projects/${href}`}>
      <SectionWrapper className="h-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {[
              ...new Set(
                Object.entries(
                  JSON.parse(
                    requiredPeople?.requiredPeople ?? "",
                  ) as Record<string, number>,
                ).map((item) => {
                  const [key, value] = item;

                  return <Badge text={key} counterValue={value} />;
                }),
              ),
            ]}
          </div>

          {session?.user.id === creator.id && (
            <p className="text-sm text-onPrimary-anti-flash-withe">Создатель</p>
          )}
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
                "text-accent-azure": status === Status.Planning,
                "text-accent-green-yellow": status === Status.InProgress,
                "text-accent-tomato": status === Status.Completed,
              })}
            >
              {status}
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          {status === Status.Completed && (
            <p className="py-3.5 text-sm text-onPrimary-anti-flash-withe">
              {members.length} участников
            </p>
          )}

          {session?.user.id === creator.id && (
            <p className="py-3.5 text-sm text-onPrimary-anti-flash-withe">
              {responses.length} откликов
            </p>
          )}

          {status !== Status.Completed && session?.user.id !== creator.id && (
            <MainButton
              text="Откликнуться"
              disabled={!session}
              onClick={(event) => {
                event.preventDefault();
                router.push(
                  createSearchParams(
                    { responseProjectId: project.id },
                    searchParams,
                  ),
                );
              }}
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
