import { Router, Request, Response, NextFunction } from "express";
import { create, findAll, findById } from "../controllers/user.controller";

const route: Router = Router();

route.post("/", (req: Request, res: Response, next: NextFunction) => {
  create(req, res);
});


route.get("/", (req: Request, res: Response, next: NextFunction) => {
  findAll(req, res);
});

route.get("/:id", (req:Request, res:Response, next:NextFunction) => {
  findById(req, res);
});

export default route;