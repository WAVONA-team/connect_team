import { type User, type Response, type Project } from "@prisma/client";

type NewResponse = Response & { candidate: User; project: Project };

export default NewResponse;
