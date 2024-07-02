import { Request } from "express";

type RequestWithUser = Request & { user: { userId: string } };

export default RequestWithUser;
