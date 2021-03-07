import * as studentDegreeModel from "../models/studentDegreeModel.js";

const addStudentDegree = async (name, year) => {
  return new Promise((resolve, reject) => {
    const model = studentDegreeModel.studentDegreeModel({
      name: name,
      year: year,
    });

    model
      .save()
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getStudentDegrees = async () => {
  return new Promise((resolve, reject) => {
    const model = studentDegreeModel.studentDegreeModel;
    model
      .find({})
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const deleteStudentDegree = (id) => {
  return new Promise((resolve, reject) => {
    studentDegreeModel.studentDegreeModel
      .deleteOne({ _id: id })
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export { addStudentDegree, getStudentDegrees, deleteStudentDegree };
