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
})

export {
    addStudentDegreeSchema
}