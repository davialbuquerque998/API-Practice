import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import { findByIdService } from "../services/user.service";

const isValidId = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id: string = `${req.params.id}`;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: "Invalid user ID format" });
      return;
    }

    next();
  } catch (error) {
    res.status(500).json({ message: error });
    return;
  }
};

const isValidUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id: string = `${req.params.id}`;

    const user = await findByIdService(id);

    if (!user) {
      res.status(400).json({ message: "User not found" });
      return;
    }

    next();
  } catch (error) {
    res.status(500).json({ message: error });
    return;
  }
};

export { isValidId, isValidUser };
