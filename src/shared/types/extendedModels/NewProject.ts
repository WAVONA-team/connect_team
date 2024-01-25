import { type User, type Project, type Response } from "@prisma/client";

type NewProject = Omit<Project, "requiredPeople"> & {
  creator: User;
  members: User[];
  responses: Response[];
  requiredPeople: Record<string, number>;
};

export default NewProject;
