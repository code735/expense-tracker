import express, { Request, Response } from 'express';
import { object, string } from 'zod';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../model/userModel';
import { Types, Document } from 'mongoose';

const app = express();

app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET_KEY || "JWT_SECRET";

const signinZodSchema = object({
  username: string(),
  password: string()
})

interface UserDocument extends Document {
  username: string;
  password: string;
  _id: Types.ObjectId;
}


export const signinRoute = app.post('/signin', async (req: Request, res: Response) => {
  
  try {
    const { username, password } = signinZodSchema.parse(req.body);

    const existingUser: UserDocument | null = await User.findOne({ username });

    if ( existingUser !== null) {
      bcrypt.compare( password, existingUser.password).then( (result) => {
        if ( result ) {
          jwt.sign(JSON.stringify(existingUser), JWT_SECRET, (err, token) => {
            if ( token ) {
              return res.status(200).json({
                status: "success",
                token,
                message: "User Signed in"
              })
            }
            else {
              return res.status(500).json({
                status: "Internal server error",
                token,
                message: "Token does not exist"
              })
            }
          });          
        }
        else {
          return res.status(401).json({
            status: "error",
            message: "Username/password incorrect"
          })
        }
      });
    }

  } catch (error: any) {
    return res.status(500).json({ message: error})
  }
});