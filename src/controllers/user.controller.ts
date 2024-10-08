import { NextFunction, Request, Response } from "express";
import { createUser } from "../services/user.service";
import { IUser } from "../models/User";

export async function create(req: Request, res: Response) {
  const { name, email, username, avatar, password, background } = req.body;
  if (!name || !email || !username || !avatar || !password || !background) {
    return res
      .status(400)
      .json({ error: "Submit all fields for registration" }); //Bad request
  }

  const user:IUser = await createUser(req.body);

  if (!user) {
    return res.status(400).json({ message: "Error creating User" });
  }

  console.log(user._id);

  return res
    .status(201)
    .json({
      message: "Congratulations!",
      user: { name, email, username, avatar, background },
    });
}
