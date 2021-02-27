import * as runtimeConstants from "./config/runtime_constants.js";
import studentDegree from "./api/studentDegreeRoute.js";
import express from "express";
import mongoose from "mongoose";

const app = express();
mongoose.connect(
    "mongodb://127.0.0.1:27017",
    {
        useNewUrlParser: true
    }
    ).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err)
    })

app.use('/studentDegree', studentDegree);


const createServer = () => {
    app.listen(runtimeConstants.PORT, () => {
        console.log(`Server started on ${runtimeConstants.PORT}`);
    });
}

createServer();
