import User from "../models/User";
import jwt from "jsonwebtoken";
import Role from "../models/Role";
import { asyncWrapper, customErrorHandler } from "../middleware";

const signUp = async(req, res) => {
    const { username, email, password, roles } = req.body
    if (!username || !email || !password) {
        return res.status(403).json({ msg: "Incomplete data model" })
    }
    const newUser = new User({
        username,
        email,
        password: await User.ancryptPassword(password)
    })
    if (roles) {
        const foundRoles = await Role.find({ name: { $in: roles } })
        newUser.roles = foundRoles.map(e => e._id);
    } else {
        const role = await Role.findOne({ name: "user" });
        newUser.roles = [role._id];
    }
    const user = await User.create(newUser);
    const token = jwt.sign({ id: newUser._id }, process.env.SECRETtJWT, {
        expiresIn: 86400
    })
    res.status(200).json({ token })
}
const signIn = asyncWrapper(async(req, res, next) => {
    const { email, password } = req.body
    const userfound = await User.findOne({ email }).populate("roles");
    if (!userfound) {
        return next(customErrorHandler('User not found', 401))
    }
    const passwordMatch = await User.comparePassword(password, userfound.password);
    if (!passwordMatch) {
        return next(customErrorHandler("Invalid password", 401))
    }
    const token = jwt.sign({ id: userfound._id }, process.env.SECRETtJWT, {
        expiresIn: 86400
    })
    res.status(200).json({ token })
})
module.exports = { signIn, signUp };