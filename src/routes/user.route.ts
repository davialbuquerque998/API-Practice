import { Router, Request, Response, NextFunction } from "express";
import { create, findAll, findById, update } from "../controllers/user.controller";
import { isValidId, isValidUser } from "../middlewares/global.middlewares";

const route: Router = Router();

route.post("/" ,(req: Request, res: Response, next: NextFunction) => {
  create(req, res);
});


route.get("/", (req: Request, res: Response, next: NextFunction) => {
  findAll(req, res);
});

route.get("/:id", isValidId, isValidUser, (req:Request, res:Response, next:NextFunction) => {
  findById(req, res);
});

route.patch("/:id", isValidId, isValidUser, (req:Request, res:Response, next:NextFunction) => {
  update(req, res);
});

export default route;