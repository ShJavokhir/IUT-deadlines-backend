import * as studentDegreeModel from "../models/studentDegreeModel.js";

const addStudentDegree = async (name, year)=>{
    return new Promise((resolve, reject)=>{
        const sample = studentDegreeModel.studentDegreeModel({
            name: name,
            year: year
        });
        
        sample.save()
        .then((data) => {
            resolve(data);
        })
        .catch((error)=>{
            reject(error);
        })
    });
    
}

export {
    addStudentDegree
}