import Joi from "joi";

const deleteStudentSubject = Joi.object({
    id: Joi.string()
        .min(1)
        .max(30)
        .required()
});

const addStudentSubjectSchema = Joi.object({
    name: Joi.string()
        .min(1)
        .max(30)
        .required(),
    moreInfo: Joi.string()
        .min(1)
        .max(2048),
    year: Joi.number()
        .integer()
        .min(1)
        .max(10)
        .required(),
    semester: Joi.number()
        .integer()
        .min(1)
        .max(10)
        .required()

});

const addStudentDegreeSchema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    year: Joi.number()
        .integer()
        .min(0)
        .max(15)
});

const deleteStudentDegreeSchema = Joi.object({
    id: Joi.string()
        .min(1)
        .max(30)
        .required()
});

export {
    addStudentDegreeSchema,
    deleteStudentDegreeSchema,
    addStudentSubjectSchema,
    deleteStudentSubject
}