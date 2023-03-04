const express=require('express')
const router=express.Router()
const userControllers=require('../controllers/createStudent');

router.post('/enroll',userControllers.createUser);
router.get('/courses',userControllers.viewCourses);
module.exports = router;