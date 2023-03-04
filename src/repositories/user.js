const userModel=require('../models/schema/user')
const Course=require('../models/courses.js')



exports.create=async(payload)=>{
    return userModel.create(payload)
    
}
exports.courses=async()=>{
    return Course.find();
}