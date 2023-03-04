const mongoose=require('mongoose');
const conn=()=>{
mongoose.connect('mongodb://localhost:27017/Students')
.then(()=>{
    console.log('Database Connected')
}).catch((err)=>{
    console.log('Failed Database Connection '+err);
})}
module.exports=conn();