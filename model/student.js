var mongoose = require('mongoose');
var student = new mongoose.Schema({
    name:{
        type:String,
        require: true,
    },
    roll_no:{
        type:String,
        require: true,
    },
    std_id:{
        type : mongoose.Schema.Types.ObjectId,
        ref:"std"
    },
    password: {
        type: String,
        require: true,
    },
    division_id:{
        type : mongoose.Schema.Types.ObjectId,
        ref:"div"
    }
});
module.exports = mongoose.model('student',student);