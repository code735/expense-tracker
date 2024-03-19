import mongoose, { Model } from "mongoose";
import { IUser, userSchema } from "../schema/userSchema";

const userModel: Model<IUser> = mongoose.model<IUser>("User",userSchema)