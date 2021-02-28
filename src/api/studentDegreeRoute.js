import express from 'express';
import * as studentDegreeController from "../controllers/studentDegreeController.js";

const router = express.Router();
router.use((req, res, next)=>{
    next();
})

router.get('/', studentDegreeController.getStudentDegree);
router.post('/', studentDegreeController.addStudentDegree);
router.put('/:id', studentDegreeController.updateStudentDegree);
router.delete('/', studentDegreeController.deleteStudentDegree);

export default router;
