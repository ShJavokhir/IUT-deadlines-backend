import { json } from "express";
import * as studentDegreeService from "../services/studentDegreeService.js";
import * as requestValidator from "../utils/requestSchemas.js";
import * as errorHandler from "../utils/errorHandler.js";
import * as sucessHandler from "../utils/sucessHandler.js";

const addStudentDegree = async (req, res) =>  {
    const degreeName = req.body.name;
    const degreeYear = req.body.year;

    const {value, error} = requestValidator.addStudentDegreeSchema.validate({
         name: degreeName,
         year: degreeYear
     });

     if(error != null){
        errorHandler.badRequest(res, error);
     }     
    
    try{
        const value = await studentDegreeService.addStudentDegree(degreeName, degreeYear);    
        sucessHandler.success(res, value); 
    }catch(err){
        errorHandler.badRequest(res, err);
    }
      
}

const getStudentDegree = (req, res) => {
    res.status(200).send("getStudentDegree");
}

const updateStudentDegree = (req, res) => {
    const degreeId = req.params.id;
    res.status(200).send(userId);
}

const deleteStudentDegree = (req, res) => {
    const degreeId = req.params.id;
}

export {
    addStudentDegree,
    getStudentDegree,
    updateStudentDegree, 
    deleteStudentDegree
}