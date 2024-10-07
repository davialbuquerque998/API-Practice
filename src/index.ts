import express, {NextFunction, Request, Response} from "express";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();


const PORT:number = parseInt(`${process.env.PORT}`) || 3000;
const app = express();

app.use(express.json());
app.use(morgan(""));


app.get("/", (req:Request, res:Response, next:NextFunction)=>{
    const result = 1 + 1;

    res.status(200).json({sum:result});
});

app.listen(PORT, ()=>{
    console.log(`Server running at http://127.0.0.1:${PORT}`);
});