import React from "react";
import classNames from "classnames";
import { api } from "@/trpc/server";
import { getServerAuthSession } from "@/server/auth";

import Duration from "@/shared/types/projectFilter/Duration";
import Status from "@/shared/types/projectFilter/Status";
import TimeFrame from "@/shared/types/projectFilter/TimeFrame";

import FilterBadge from "@/components/filterBadge/FilterBadge";
import FilterCheckBox from "@/components/filterCheckBox/FilterCheckBox";
import FilterViewButton from "@/components/filterViewButton/FilterViewButton";
import FilterSelect from "@/components/filterSelect/FilterSelect";

import MainButtonLink from "@/ui/mainButton/MainButtonLink";
import BackButton from "@/ui/backButton/BackButton";
import ProjectList from "@/modules/projectList/ProjectList";

const ProjectsPage: React.FC = React.memo(async () => {
  const session = await getServerAuthSession();
  const projects = await api.project.getAll.query();

  const tags = projects.flatMap((project) => {
    return project.requiredPeople.map((person) => person.profession);
  });

  return (
    <section>
      {!session && (
        <p className="mt-8 text-base text-secondary-cadet-grey">
          Зарегистрируйтесь, чтобы откликнуться на проект
        </p>
      )}

      <div
        className={classNames("flex items-center justify-between", {
          "mt-8": !session,
          "mt-12": session,
        })}
      >
        <div className="flex items-center gap-2">
          <BackButton />

          <h2 className="text-3xl text-onPrimary-anti-flash-withe">Проекты</h2>
        </div>

        <MainButtonLink
          text="Создать проект"
          path="/pages/projects/create"
          target="_self"
          disabled={!session}
        />
      </div>

      <div className="mt-8 flex items-center gap-6">
        <p className="text-base text-onPrimary-anti-flash-withe">По тегам:</p>

        <div className="flex flex-wrap gap-5">
          {[...new Set(tags)]
            .sort((a, b) => a.localeCompare(b))
            .map((tag) => (
              <FilterBadge key={tag} text={tag} />
            ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <FilterCheckBox
            labelText="Мои проекты"
            checkedState={false}
            disabled={session ? false : true}
            value="Мои проекты"
          />

          <FilterCheckBox
            labelText="Остальные проекты"
            checkedState={session ? false : true}
            disabled={session ? false : true}
            value="Остальные проекты"
          />
        </div>

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-6">
            <FilterSelect
              allItems={[
                TimeFrame.All,
                TimeFrame.Month,
                TimeFrame.Week,
                TimeFrame.Last3Days,
              ]}
              paramName="timeFrame"
            />

            <FilterSelect
              allItems={[
                Duration.Any,
                Duration.Month,
                Duration.LessSixMonth,
                Duration.MoreSixMonth,
              ]}
              paramName="duration"
            />

            <FilterSelect
              allItems={[
                Status.Any,
                Status.Planning,
                Status.InProgress,
                Status.Completed,
              ]}
              paramName="status"
            />
          </div>

          <div className="flex items-center gap-2">
            <FilterViewButton value="grid" />
            <FilterViewButton value="row" />
          </div>
        </div>
      </div>

      <ProjectList projects={projects} />
    </section>
  );
});

export default ProjectsPage;
