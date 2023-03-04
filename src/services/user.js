const express=require('express');
const app=express();
const userRepo = require("../repositories/user");

//User is created using payload from Controller to Services (Here) and passes to repo function 
exports.createUser = async (payload) => {
    //  joi.validate(payload, joiSchema.post);
    //   const passwordHash = await bcrypt.hash(payload.password, bcryptSalt);
    let user;
    const createPayload = {
      firstName: payload.firstName,
      lastName: payload.lastName,
      email: payload.email,
      qualification:payload.qualification,
      course:payload.course,
      phone:payload.phone
    };
    user = await userRepo.create(createPayload);
    return {
      id: user._id,
      name:user.firstName+" "+user.lastName,
      success: true,
    };
  };

  //Cousre Data is taken from userRepo.courses() function returned to Controllers 
exports.viewCourses=async()=>{
  let course= await userRepo.courses();
  return course;
}