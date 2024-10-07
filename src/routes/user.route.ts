import { Router } from "express";
import mySum from "../controllers/user.controller";

const route = Router();

route.get("/", mySum);

export default route;