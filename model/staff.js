const mongoose = require('mongoose');

const staff_data = new mongoose.Schema({
    name:{
        type:String,
        require: true,
    },
    username:{
        type:String,
        require: true,
    },
    contact_no:{
        type:String,
        require: true,
    },
    password:{
        type:String,
        require: true,
    }
});
module.exports = mongoose.model('staff_data',staff_data);