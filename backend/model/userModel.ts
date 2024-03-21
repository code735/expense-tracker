import mongoose from "mongoose";
import { userSchema } from "../schema/userSchema";

export const User = mongoose.model('User', userSchema);