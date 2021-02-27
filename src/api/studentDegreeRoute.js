import express from 'express';
import * as studentDegree from "../controllers/studentDegreeController.js";

const router = express.Router();

router.use((req, res, next)=>{
    next();
})

router.get('/', studentDegree.getStudentDegree);
router.post('/:name/:year', studentDegree.addStudentDegree);
router.put('/:id', studentDegree.updateStudentDegree);
router.delete('/', (req, res) => {

});

export default router;
