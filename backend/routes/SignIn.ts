import express, { Request, Response } from 'express';
import { object, string } from 'zod';
import bcrypt from 'bcrypt';
import jwt, { JsonWebTokenError } from 'jsonwebtoken';
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
          const token = jwt.sign({ userId: existingUser._id }, JWT_SECRET);
          res.json({
            token,
            status:'success',
            id: existingUser._id,
            name: existingUser.username,
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