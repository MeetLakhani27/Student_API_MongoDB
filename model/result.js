const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    student_id :{
        type : mongoose.Schema.Types.ObjectId,
        ref:"student"
    },
    sub1:{
        type:Number,
        require: true,
    }, 
    sub2:{
        type:Number,
        require: true,
    },
    sub3:{
        type:Number,
        require: true,
    },
    sub4:{
        type:Number,
        require: true,
    },
    sub5:{
        type:Number,
        require: true,
    },
    total:{
        type:Number,
        require: true,
    },
    percentage:{
        type:Number,
        require: true,
    }
});
module.exports = mongoose.model('result',userSchema);