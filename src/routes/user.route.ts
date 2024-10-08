import { Router, Request, Response, NextFunction } from "express";
import { create } from "../controllers/user.controller";

const route: Router = Router();

route.post("/", (req: Request, res: Response, next: NextFunction) => {
  create(req, res);
});

export default route;