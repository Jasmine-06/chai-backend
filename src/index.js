// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
    path: "./env"
})

// import express from "express";
// const app = express();

// function connectDB() {}
// connectDB()


connectDB()
.then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`app is listening on port: ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("mongodb connection error: ", error);
    
})




/*
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error;
        })

        app.listen(process.env.PORT, () => {
            console.log(`app is listening on port: , ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error);
        throw err
        
    }
})()
    */