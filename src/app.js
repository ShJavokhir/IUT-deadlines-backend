import * as runtimeConstants from "./config/runtime_constants.js";
import studentDegree from "./api/studentDegreeRoute.js";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import * as console from "./utils/logger.js"
import Joi from "joi";

const app = express();
app.use(bodyParser.json());
mongoose.connect(
    "mongodb://127.0.0.1:27017/iutDeadlines",
    {
        useNewUrlParser: true
    }
    ).then((data) => {
        console.log("Connected to mongoDB server !");
        //console.log(data);
    }).catch((err) => {
        console.error(err)
    })

//studentDegree endpoint
app.use('/studentDegree', studentDegree);


const createServer = () => {
    app.listen(runtimeConstants.PORT, () => {
        console.info(`Server started on ${runtimeConstants.PORT}`);
    });
}

createServer();
