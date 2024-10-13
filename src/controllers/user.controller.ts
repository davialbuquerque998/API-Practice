import { NextFunction, Request, Response } from "express";
import { createService, findAllService, findByIdService } from "../services/user.service";
import { IUser } from "../models/User";

import mongoose from "mongoose";

export async function create(req: Request, res: Response) {
  const { name, email, username, avatar, password, background } = req.body;
  if (!name || !email || !username || !avatar || !password || !background) {
    return res
      .status(400)
      .json({ error: "Submit all fields for registration" }); //Bad request
  }

  const user:IUser = await createService(req.body);

  if (!user) {
    return res.status(400).json({ message: "Error creating User" });
  }

  return res
    .status(201)
    .json({
      message: "Congratulations!",
      user: { name, email, username, avatar, background },
    });
}


export async function findAll(req:Request, res:Response) {
  const users = await findAllService();

  if(!users){
    return res.status(400).json({message:"There are no registered users"});
  }


  return res.status(200).json(users);
}


export async function findById(req:Request, res:Response) {
  const id:string = `${req.params.id}`;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({ message: "Invalid user ID format" });
  }

  const user = await findByIdService(id);

  if(!user) {
    return res.status(400).json({message:"User not found"});
  }

  return res.status(200).json(user);
}