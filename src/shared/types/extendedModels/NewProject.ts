import {
  type User,
  type Project,
  type RequiredPeopleState,
  type Response,
} from "@prisma/client";

type NewProject = Project & {
  creator: User;
  members: User[];
  requiredPeople: RequiredPeopleState | null;
  responses: Response[];
};

export default NewProject;
