import express from "express";
import morgan from "morgan";
import { connectDatabase } from "./database/db";
import dotenv from "dotenv";
import userRoute from "./routes/user.route";
import authRoute from "./routes/auth.route";
import cors from "cors";

dotenv.config();


const PORT:number = parseInt(`${process.env.PORT}`) || 3000;
const app = express();

connectDatabase();

app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());

app.use("/user",userRoute);
app.use("/auth",authRoute);


app.listen(PORT, ()=>{
    console.log(`Server running at http://127.0.0.1:${PORT}`);
});