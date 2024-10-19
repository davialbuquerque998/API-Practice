import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { loginService, generateToken } from "../services/auth.service";

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

        const token = generateToken(user.id);

        res.status(200).json({token:token});
        return;
    } catch (error) {
        res.status(500).json(error);
        return;
    }
}