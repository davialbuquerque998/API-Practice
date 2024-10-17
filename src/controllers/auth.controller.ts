import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { loginService } from "../services/auth.service";

export async function login(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
        const user = await loginService(email);

        if (!user || !user.password) {
            res.status(400).json({ message: "Invalid email or password" });
            return;
        }

        const passwordIsValid = await bcrypt.compare(password, user.password);

        if (!passwordIsValid) {
            res.status(400).json({ message: "Invalid email or password" });
            return;
        }

        res.status(200).json(user);
        return;
    } catch (error) {
        res.status(500).json(error);
        return;
    }
}