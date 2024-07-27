const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    image:{
        type:String,
        required:true,
    },
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    idade:{
        type:Number,
        required:true,
    },
    mes_ano : {
        type:String,
        required:true,
    }
})

const UserModel = new mongoose.model('User', UserSchema);

module.exports = UserModel;