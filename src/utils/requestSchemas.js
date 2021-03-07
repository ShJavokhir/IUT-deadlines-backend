import Joi from "joi";

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
        .max(30)
        .required()
});

export {
    addStudentDegreeSchema,
    deleteStudentDegreeSchema
}