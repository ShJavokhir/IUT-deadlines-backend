import { json } from "express";
import { studentDegreeModel } from "../models/studentDegreeModel.js";
import * as studentDegreeService from "../services/studentDegreeService.js";
import * as requestValidator from "../utils/requestSchemas.js";
import * as sucessHandler from "../utils/sucessHandler.js";

const addStudentDegree = async (req, res, next) => {
  const degreeName = req.body.name;
  const degreeYear = req.body.year;

  const validationResult = requestValidator.addStudentDegreeSchema.validate({
    name: degreeName,
    year: degreeYear,
  });

  if (validationResult.error) {
    const err = new Error(validationResult.error);
    err.code = 400;
    return next(err);
  }

  try {
    const value = await studentDegreeService.addStudentDegree(
      degreeName,
      degreeYear
    );
    sucessHandler.success(res, value);
  } catch (error) {
    const err = new Error(error);
    err.code = 500;
    return next(err);
  }
};

const getStudentDegrees = async (req, res, next) => {
  try {
    const data = await studentDegreeService.getStudentDegrees();
    sucessHandler.success(res, data);
  } catch (error) {
    const err = new Error(error);
    err.code = 500;
    next(err);
  }
};

const updateStudentDegree = (req, res) => {
  //TODO:Make logic for update student degree
   res.json({
     "status": "fail",
     "error": "Update studentDegree function is not defined yet"
   });
};

const deleteStudentDegree = async (req, res, next) => {
  const studentDegreeId = req.body.id;
  const validationResult = requestValidator.deleteStudentDegreeSchema.validate({
    id: studentDegreeId,
  });
  if (validationResult.error) {
    const err = new Error(validationResult.error);
    err.code = 400;
    next(err);
  }
  try{
    const result = await studentDegreeService.deleteStudentDegree(studentDegreeId);
    sucessHandler.success(res, result);
  }catch(error){
    const err = new Error(error);
    err.code = 500;
    next(err);
  }
};

export {
  addStudentDegree,
  getStudentDegrees,
  updateStudentDegree,
  deleteStudentDegree,
};
