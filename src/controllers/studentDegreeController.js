import * as studentDegreeService from "../services/studentDegreeService.js";

const addStudentDegree = async (req, res) =>  {
    await studentDegreeService.addStudentDegreeService("some", 5);    
    //res.status(200).send("addStudentDegree")   

}

const getStudentDegree = (req, res) => {
    res.status(200).send("getStudentDegree");
}

const updateStudentDegree = (req, res) => {
    const userId = req.params.id;
    res.status(200).send(userId);
}

export {
    addStudentDegree,
    getStudentDegree,
    updateStudentDegree 
}