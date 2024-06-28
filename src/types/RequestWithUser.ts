import { Request } from "express";

type RequestWithUser = Request & { user: string };

export default RequestWithUser;
