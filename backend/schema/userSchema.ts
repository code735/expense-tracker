import { Document, Schema } from "mongoose";

export interface IUser extends Document {
  username: String;
  email: String;
  password: String;
}

export const userSchema : Schema<IUser> = new Schema<IUser>({
  username: { type: String, required: true},
  email: { type: String, required: true},
  password: { type: String, required: true},
})