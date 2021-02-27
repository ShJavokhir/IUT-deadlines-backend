import mongoose from "mongoose";

const studentDegreeSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        year: {
            type: Number,
            required: true
        }
    }
)
const studentDegreeModel = mongoose.model("studentDegree", studentDegreeSchema); 
export {
    studentDegreeModel
}