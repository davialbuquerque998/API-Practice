import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const CONNECTION_URI:string = `${process.env.CONNECTION_URI}`;
const connectDatabase = async () =>{

    try {
        const something: typeof mongoose = await mongoose.connect(CONNECTION_URI, {});
        console.log(`It works!`);
    } catch (error) {
        console.log(error);
    }
}


export {
    connectDatabase
}