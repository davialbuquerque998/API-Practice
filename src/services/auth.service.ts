import { User, IUser } from "../models/User";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const SECRET_JWT:string = `${process.env.SECRET_JWT}`;

export async function loginService(email:string) {
    return User.findOne({email:email}).select("+password");
}

export const generateToken = (id:string) => {
    return jwt.sign({id:id}, SECRET_JWT, {expiresIn:86400}); //Expires in 24 hours = 86400 seconds
}


