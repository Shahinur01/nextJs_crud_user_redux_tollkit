import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    }
},{
    timeStamps:true
})

// 
export default mongoose.models.User || mongoose.model('User', userSchema);

