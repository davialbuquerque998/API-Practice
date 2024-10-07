import { Request, Response } from "express";

const mySum = (req:Request, res:Response) => {
    const result:number = 1 + 100;

    res.status(200).json({result});
}

export default mySum;