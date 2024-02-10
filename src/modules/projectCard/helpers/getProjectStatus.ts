import Status from "@/shared/types/projectFilter/Status";

const getProjectStatus = (startDate: Date, endDate: Date) => {
  const now = new Date();

  if (now < startDate) {
    return Status.Planning;
  }

  if (now > startDate && now < endDate) {
    return Status.InProgress;
  }

  return Status.Completed;
};

export default getProjectStatus;
