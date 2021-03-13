import * as studentSubjectModel from "../models/studentSubjectModel.js";

const addStudentSubject = (name, moreInfo, year, semester) => {

    return new Promise((resolve, reject) => {

        const model = studentSubjectModel.studentSubjectModel({
            name: name,
            moreInfo: moreInfo,
            year: year,
            semester: semester
        });
        model.save().then(value => {
            resolve(value);
        }).catch(e => {
            reject(e);
        })
    });
}

const deleteStudentSubject = (id) => {
    return new Promise((resolve, reject) => {
        studentSubjectModel.studentSubjectModel.deleteOne({"_id":id}).then(result => {

            resolve(result);
        }).catch(e => {
            reject(e);
        });
    });
}

const getStudentSubjects = () => {
    return new Promise((resolve, reject) => {
        studentSubjectModel.studentSubjectModel.find().then(result => {
            resolve(result);
        }).catch(err => {
            reject(err);
        })
    });
}

export {
    addStudentSubject,
    deleteStudentSubject,
    getStudentSubjects
}