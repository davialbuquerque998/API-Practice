import { Request, Response } from "express";
import {
  createService,
  findAllService,
  findByIdService,
  updateService,
} from "../services/user.service";
import { IUser } from "../models/User";

export async function create(req: Request, res: Response) {
  try {
    const { name, email, username, avatar, password, background } = req.body;
    if (!name || !email || !username || !avatar || !password || !background) {
      res.status(400).json({ error: "Submit all fields for registration" }); //Bad request
      return;
    }

    const user: IUser = await createService(req.body);

    if (!user) {
      res.status(400).json({ message: "Error creating User" });
      return;
    }

    res.status(201).json({
      message: "Congratulations!",
      user: { name, email, username, avatar, background },
    });

    return;
  } catch (error) {
    res.status(500).json({ message: error });
    return;
  }
}

export async function findAll(req: Request, res: Response) {
  try {
    const users = await findAllService();

    if (!users) {
      res.status(400).json({ message: "There are no registered users" });
      return;
    }

    res.status(200).json(users);
    return;
  } catch (error) {
    res.status(500).json({ message: error });
    return;
  }
}

export async function findById(req: Request, res: Response) {
  try {
    const id: string = `${req.params.id}`;

    const user = await findByIdService(id);

    res.status(200).json(user);
    return;
  } catch (error) {
    res.status(500).json({ message: error });
    return;
  }
}

export async function update(req: Request, res: Response) {
  try {
    const { name, email, username, avatar, password, background } = req.body;
    if (!name && !email && !username && !avatar && !password && !background) {
      res
        .status(400)
        .json({ error: "Submit at least one field for registration" }); //Bad request
      return;
    }

    const id: string = req.params.id;

    await updateService(
      id,
      name,
      email,
      username,
      avatar,
      password,
      background
    );

    res.json({ message: "User was updated succesfully!" });
    return;
  } catch (error) {
    res.status(500).json({ message: error });
    return;
  }
}
