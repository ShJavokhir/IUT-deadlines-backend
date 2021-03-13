import dotenv from "dotenv";
import studentDegree from "./api/studentDegreeRoute.js";
import studentSubject from "./api/studentSubjectRoute.js";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import * as console from "./utils/logger.js";
import Joi from "joi";

dotenv.config();

const app = express();
app.use(bodyParser.json());
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
  })
  .then((data) => {
    console.log("Connected to mongoDB server !");
    //console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

//studentDegree endpoint
app.use("/studentDegree", studentDegree);
app.use("/studentSubject", studentSubject);

app.use(function (err, req, res, next) {
  const statusCode = err.code || 400;
  res.status(statusCode).json({
    status: "fail😭",
    error: err.message,
  });
  next();
});

const createServer = () => {
  app.listen(process.env.PORT, () => {
    console.info(`Server started on ${process.env.PORT}`);
  });
};

createServer();
