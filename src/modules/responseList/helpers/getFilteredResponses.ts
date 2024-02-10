/* eslint-disable @typescript-eslint/no-unsafe-enum-comparison */
import type Filter from "../types/Filter";
import type NewResponse from "@/shared/types/extendedModels/NewResponse";
import TimeFrame from "@/shared/types/projectFilter/TimeFrame";

const getFilteredResponse = (
  responses: NewResponse[],
  filterParams: Filter,
) => {
  const { professions,  timeFrame,  } =
    filterParams;
  const currentDate = new Date();
  const filteredResponse = responses.filter((response) => {
    const {
      date,
      profession,
    } = response;
    const responsePublishedDate = new Date(date);

    const professionMatch = professions.length
      ? professions.includes(profession)
      : true;

    const timeFrameMatch = () => {
      switch (timeFrame) {
        case TimeFrame.Month: {
          currentDate.setMonth(currentDate.getMonth() - 1);

          return responsePublishedDate >= currentDate;
        }

        case TimeFrame.Week: {
          currentDate.setDate(currentDate.getDate() - 7);

          return responsePublishedDate >= currentDate;
        }

        case TimeFrame.Last3Days: {
          currentDate.setDate(currentDate.getDate() - 3);

          return responsePublishedDate >= currentDate;
        }

        default: {
          return true;
        }
      }
    };

    return professionMatch && timeFrameMatch();
  });

  return filteredResponse.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
};

export default getFilteredResponse;
