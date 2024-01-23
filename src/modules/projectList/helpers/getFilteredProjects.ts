/* eslint-disable @typescript-eslint/no-unsafe-enum-comparison */
import { type Session } from "next-auth";
import type Filter from "../types/Filter";
import type NewProject from "@/shared/types/extendedModels/NewProject";
import TimeFrame from "@/shared/types/projectFilter/TimeFrame";
import Duration from "@/shared/types/projectFilter/Duration";

import calculateDurationInMonths from "./calculateDurationMonths";
import Status from "@/shared/types/projectFilter/Status";

const getFilteredProjects = (projects: NewProject[], filterParams: Filter, session: Session | null) => {
  const { professions, whosProjects, timeFrame, duration, status } = filterParams;
  const currentDate = new Date();

  const filteredProjects = projects.filter((project) => {
    const { published, deadline, requiredPeople, creator, status: projectStatus } = project;
    const projectPublishedDate = new Date(published);

    const professionMatch = professions.length ?
      Object.keys(JSON.parse(requiredPeople?.requiredPeople ?? "") as Record<string, number>).some(requiredProfession => professions.includes(requiredProfession))
      : true;

    const whosProjectMatch = () => {
      if (!whosProjects || !session) {
        return true;
      }

      if (whosProjects.includes("Мои проекты")) {
        return creator.id === session.user.id;
      }

      if (whosProjects.includes("Остальные проекты")) {
        return creator.id !== session.user.id;
      }

      return true;
    };

    const timeFrameMatch = () => {
      switch (timeFrame) {
        case TimeFrame.Month: {
          currentDate.setMonth(currentDate.getMonth() - 1);

          return projectPublishedDate >= currentDate;
        }

        case TimeFrame.Week: {
          currentDate.setDate(currentDate.getDate() - 7);

          return projectPublishedDate >= currentDate;
        }

        case TimeFrame.Last3Days: {
          currentDate.setDate(currentDate.getDate() - 3);

          return projectPublishedDate >= currentDate;
        }

        default: {
          return true;
        }
      }
    };

    const durtationMatch = () => {
      switch (duration) {
        case Duration.Month: {
          return calculateDurationInMonths(published, deadline) === 1;
        }

        case Duration.LessSixMonth: {
          return calculateDurationInMonths(published, deadline) <= 6;
        }

        case Duration.MoreSixMonth: {
          return calculateDurationInMonths(published, deadline) > 6;
        }

        default: {
          return true;
        }
      }
    };

    const statusMatch = () => {
      switch (status) {
        case Status.Planning: {
          return projectStatus === Status.Planning;
        }

        case Status.Completed: {
          return projectStatus === Status.Completed;
        }

        case Status.InProgress: {
          return projectStatus === Status.InProgress;
        }

        default: {
          return true;
        }
      }
    };

    return professionMatch && whosProjectMatch() && timeFrameMatch() && durtationMatch() && statusMatch();
  });

  return filteredProjects.sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime());
};

export default getFilteredProjects;
