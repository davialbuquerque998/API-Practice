import { User, IUser } from "../models/User";

export async function loginService(email:string) {
    return User.findOne({email:email}).select("+password");
}