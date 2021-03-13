import mongoose from "mongoose";

const studentSubjectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    moreInfo: {
        type: String,
        required: false,
    },
    year: {
        type: Number,
        required: true,
    },
    semester: {
        type: Number,
        required: true
    }
});

const studentSubjectModel = mongoose.model("studentSubject", studentSubjectSchema);

export {
    studentSubjectModel
}