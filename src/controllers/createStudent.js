const path=require('path')
const service = require('../services/user')
const { catchAsync } = require('../helpers/request');


exports.createUser = catchAsync(async (req, res, next) => {
    const payload = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      qualification: req.body.qualification,
      course: req.body.course,
      phone: req.body.phone,
    };
  
    res.body = await service.createUser(payload);
    return res.json(res.body);
  });
  
exports.viewCourses=catchAsync(async(req,res)=>{
  res.body=await service.viewCourses();
  return res.json(res.body);
})  