import User from "../models/User";
import jwt from "jsonwebtoken";
import Role from "../models/Role";

const signUp =async (req,res)=>
{
    const {username,email,password,roles}=req.body
    const newUser=new User({
        username,
        email,
        password: await User.ancryptPassword(password)
    })
    if(roles)
    {
        const foundRoles=await Role.find({name:{$in:roles}})
        newUser.roles=foundRoles.map(e=>e._id);
    }else
    {
        const role= await Role.findOne({name: "user"});
        newUser.roles=[role._id];
    }
    const user=await User.create(newUser);
    const token=jwt.sign({id:newUser._id},process.env.SECRETtJWT,{
        expiresIn:86400
    })
    console.log(user);
    res.status(200).json({token})
}
const signIn =async (req,res)=>
{
    const {email,password}=req.body
    const userfound=await User.findOne({email}).populate("roles");
    if(!userfound)
    {
        return res.status(404).json({msg:"User not found"});
    }
    const passwordMatch=await User.comparePassword(password,userfound.password);
    if(!passwordMatch)
    {
        return res.status(401).json({token:null,msg:"Invalid password"})
    }
    const token=jwt.sign({id:userfound._id},process.env.SECRETtJWT,{
        expiresIn:86400
    })
    res.status(200).json({token})
}
module.exports={signIn,signUp};