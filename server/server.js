import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

mongoose.connect(process.env.URI)
.then(
    () => {
        console.log("connected");
        app.listen(process.env.PORT || 8000, (err)=>{
            if(err) console.log(err);

            console.log("running successfully at", process.env.PORT)
        });
    }
)
.catch((error) => {
    console.log("error", error);
});

app.get("/", (req,res)=> {
    res.send("api running")
});