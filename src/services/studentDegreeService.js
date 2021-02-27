import * as studentDegreeModel from "../models/studentDegreeModel.js";

const addStudentDegreeService = async (name, year)=>{
    const sample = studentDegreeModel.studentDegreeModel({
        name: name,
        year: year
    });

    sample.save()
    .then((data) => {
        console.log(data)
    })
    .catch((error)=>{
        console.log(error);
    })

}

export {
    addStudentDegreeService
}