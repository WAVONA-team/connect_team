import { User, Response, Project } from "@prisma/client";

type NewResponse = Response & { candidate: User, project: Project}

export default NewResponse;
