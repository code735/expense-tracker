import express, { Request, Response } from 'express';
import { object, string } from 'zod';
import bcrypt from 'bcrypt';
import { User } from '../model/userModel';

const app = express();

app.use(express.json());


const signupZodSchema = object({
  username: string(),
  password: string().min(8)
})


export const signupRoute = app.post('/signup', async (req: Request, res: Response) => {
  
  try {
    const { username, password } = signupZodSchema.parse(req.body);

    const existingUser = await User.findOne({ username });

    if ( existingUser ) {
      return res.status(400).json({ message: "User already exist" })
    }


    const hashedPassword = await bcrypt.hash( password, 10 )

    const newUser = new User({ username, password: hashedPassword })
    await newUser.save();

    res.status(200).json({ message: "User created successfully"})
  } catch (error: any) {
    res.status(500).json({ message: error.message})
  }

});