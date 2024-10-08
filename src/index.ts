import express, {NextFunction, Request, Response} from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import route from "./routes/user.route";
dotenv.config();


const PORT:number = parseInt(`${process.env.PORT}`) || 3000;
const app = express();

app.use(express.json());
app.use(morgan("tiny"));

app.use("/user",route);


app.listen(PORT, ()=>{
    console.log(`Server running at http://127.0.0.1:${PORT}`);
});