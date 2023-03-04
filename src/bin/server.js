const express = require('express');
const PORT=2000;
const app=express();
const route=require('../routes/student');
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(route)
app.listen(PORT,()=>{
    console.log('Server is Running on PORT '+PORT);
    require('../bootstrap/dbconn');

})