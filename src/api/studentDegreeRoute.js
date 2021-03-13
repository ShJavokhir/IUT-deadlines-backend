import express from 'express';
import * as studentDegreeController from "../controllers/studentDegreeController.js";

const router = express.Router();
//router.use((req, res, next)=>{
//    next();
//})

//studentDegree
router.get('/', studentDegreeController.getStudentDegrees);
router.post('/', studentDegreeController.addStudentDegree);
router.patch('/:id', studentDegreeController.updateStudentDegree);
router.delete('/', studentDegreeController.deleteStudentDegree);

export default router;
