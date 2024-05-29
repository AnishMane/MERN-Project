import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
const app = express();

dotenv.config();
app.use(cors());

import userRoute from "./router/userRoute.js";

app.use(express.json());
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

app.use( userRoute)
