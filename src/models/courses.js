const mongoose = require('mongoose');
const courseSchema=new mongoose.Schema({

Title:{
    type:String,
},
Description:{
    type:String,
},
Duration:{
    type:String,
},
Price:{
    type:String,
},
"About Teacher":{
    type:String,
},
Prerequisites:{
    type:String,
},
image:{
    type:String,
},

})

const viewCourse= new mongoose.model('Course',courseSchema);
module.exports = viewCourse;