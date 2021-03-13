import * as express from "express";
import * as studentSubjectController from "../controllers/studentSubjectController.js";

const router = express.Router();

router.post("/", studentSubjectController.addStudentSubject);
router.get("/", studentSubjectController.getStudentSubjects);
router.delete("/", studentSubjectController.deleteStudentSubject);
router.patch("/", studentSubjectController.updateStudentSubject);

export default router;