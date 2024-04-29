import express, { Request, Response, json } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { signupRoute } from './routes/signUp';
import { signinRoute } from './routes/SignIn';
import { verifyUser } from './auth';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
app.use(cors());
app.use(json());

const mongoURI: string = process.env.MONGO_URI || '';

mongoose.connect(mongoURI, {
} as mongoose.ConnectOptions).then(() => {
  console.log('Connected to MongoDB');
}).catch((error: any) => {
  console.error('Error connecting to MongoDB:', error);
});

app.get('/', verifyUser, (req: Request, res: Response) => {
  res.send("hi");
});

// signup route
app.use(signupRoute);
app.use(signinRoute);

const PORT: string | number = process.env.BACKEND_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});

export default app;
