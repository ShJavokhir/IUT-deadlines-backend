import * as requestHandler from "../utils/requestSchemas.js";
import * as studentSubjectService from "../services/studentSubjectService.js";
import {success} from "../utils/sucessHandler.js";

const addStudentSubject = async (req, res, next) => {

    const subjectName = req.body.name;
    const subjectMoreInfo = req.body.moreInfo;
    const subjectYear = req.body.year; //Subject year, for example calculus can be taught for only freshman (year 1) students
    const subjectSemester = req.body.semester;

    const validationResult = requestHandler.addStudentSubjectSchema.validate({
        name: subjectName,
        moreInfo: subjectMoreInfo,
        year: subjectYear,
        semester: subjectSemester
    });

    if(validationResult.error){

        const err = new Error(validationResult.error);
        err.code = 400;
        return next(err);
    }

    try{
        const value = await studentSubjectService.addStudentSubject(subjectName, subjectMoreInfo, subjectYear, subjectSemester);
        success(res, value);
    }catch (e) {
        const err = new Error(e);
        err.code = 500;
        return next(err);
    }

}

const getStudentSubjects = async (req, res, next) => {
    try{
        const data = await studentSubjectService.getStudentSubjects();
        success(res, data);
    }catch (e){
        const err = new Error(err);
        err.code = 500;
        return next(err);
    }

}

const deleteStudentSubject = async (req, res, next) => {
    const subjectId = req.body.id;

    const validationResult = requestHandler.deleteStudentSubject.validate({
        id: subjectId
    });

    if(validationResult.error){
        const err = new Error(validationResult.error);
        err.code = 400;
        return next(err);
    }

    try{
        console.error(1);
        const result = await studentSubjectService.deleteStudentSubject(subjectId);
        console.error(result);
        success(res,result);
    }catch (e) {
        const err = new Error(e);
        err.code = 500;
        next(err);
    }

}

const updateStudentSubject = async (req, res, next) => {

}

export {
    addStudentSubject,
    getStudentSubjects,
    deleteStudentSubject,
    updateStudentSubject
}