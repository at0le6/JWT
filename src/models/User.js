import { Schema,model } from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema=new Schema({
    username:
    {
        type: String,
        unique: true
    },
    email:
    {
        type: String,
        unique:true
    },
    password:
    {
        type:String,
        required:true
    },
    roles:[{
        type: Schema.Types.ObjectId,
        ref:"Role"
    }]
},{
    timestamps:true,
    versionKey:false
});

UserSchema.statics.ancryptPassword=async (password)=>{
    const salt=await bcrypt.genSalt(11);
    return await bcrypt.hash(password,salt)
}

UserSchema.statics.comparePassword=async (password,recivePassword)=>{
     return await bcrypt.compare(password,recivePassword);
}

export default model('User',UserSchema);