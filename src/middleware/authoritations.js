import jwt from "jsonwebtoken";
import User from "./../models/User";
import Role from "./../models/Role";
const verifyToken = async(req, res, next) => {
    try {
        const token = req.headers["x-acces-token"];
        if (!token) {
            return res.status(403).json({ msg: "Not token provided" })
        }
        const decoded = jwt.verify(token, process.env.SECRETtJWT);
        req.userId = decoded.id
        const user = await User.findById(req.userId, { password: 0 });
        if (!user) {
            return res.status(404).json({ msg: "User not found" })
        }
        next();
    } catch (error) {
        res.status(401).json({ msg: "Unauthorized" })
    }
}
const isModerator = async(req, res, next) => {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } })
    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name == "moderator") {
            next();
            return
        }
    }
    return res.status(403).json({ msg: "Requier Moderator role" })
}
const isAdmin = async(req, res, next) => {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } })
    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name == "admin") {
            next();
            return
        }
    }
    return res.status(403).json({ msg: "Requier Admin role" })
}
module.exports = { verifyToken, isModerator, isAdmin }