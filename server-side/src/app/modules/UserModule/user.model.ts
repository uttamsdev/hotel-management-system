import mongoose from "mongoose";
import { TUser } from "./user.interface";

const schema = new mongoose.Schema<TUser>({
    name: {type: String},
    email: {type: String},
    role: {type: String, default: "user"}
});
export const Users = mongoose.model<TUser>('user', schema);