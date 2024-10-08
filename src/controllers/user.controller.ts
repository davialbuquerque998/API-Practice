import { NextFunction, Request, Response } from "express";


export function create(req:Request, res:Response) {
    const {name, email, username, avatar, password, background} = req.body;
    if(!name || !email || !username || !avatar || !password || !background){
        return res.status(400).json({error:"Submit all fields for registration"}); //Bad request
    }

    return res.status(201).json({message:"Congratulations!", user:{name, email, username, avatar, background}});
}

