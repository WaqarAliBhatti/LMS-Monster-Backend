
const mongoose = require('mongoose');

const createUserSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
   qualification: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
   


})

const createUser = new mongoose.model('Students', createUserSchema)

module.exports = createUser;