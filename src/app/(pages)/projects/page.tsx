import React from "react";
import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";
import classNames from "classnames";

import ProjectList from "@/modules/projectList/ProjectList";

import NavBar from "@/components/navBar/NavBar";
import FilterBadge from "@/components/filterBadge/FilterBadge";
import FilterCheckBox from "@/components/filterCheckBox/FilterCheckBox";
import FilterSelect from "@/components/filterSelect/FilterSelect";
import FilterViewButton from "@/components/filterViewButton/FilterViewButton";

import TimeFrame from "@/shared/types/projectFilter/TimeFrame";
import Duration from "@/shared/types/projectFilter/Duration";
import Status from "@/shared/types/projectFilter/Status";

import Container from "@/ui/container/Container";
import BackButton from "@/ui/backButton/BackButton";
import MainButtonLink from "@/ui/mainButton/MainButtonLink";

const Projects: React.FC = async () => {
  const session = await getServerAuthSession();
  const projects = await api.project.getAll.query();

  const tags = projects.flatMap((project) => {
    const { requiredPeople } = project;
    
    return Object.keys(requiredPeople);
  });


  return (
    <Container>
      <NavBar />

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

            <h2 className="text-3xl text-onPrimary-anti-flash-withe">
              Проекты
            </h2>
          </div>

          <MainButtonLink
            text="Создать проект"
            path="/projects/create"
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
                <FilterBadge key={tag} text={tag} paramName="professions" />
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
    </Container>
  );
};

export default Projects;
