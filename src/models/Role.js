import { Schema, model } from "mongoose";

export const ROLES = ["admin", "moderator", "user"]

const rolSchema = new Schema({
    name: String
}, { versionKey: false });
export default model('Role', rolSchema);