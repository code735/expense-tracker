import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { signupRoute } from './routes/signUp';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const mongoURI: string = process.env.MONGO_URI || '';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
} as mongoose.ConnectOptions).then(() => {
  console.log('Connected to MongoDB');
}).catch((error: any) => {
  console.error('Error connecting to MongoDB:', error);
});

app.get('/', (req: Request, res: Response) => {
  res.send("hi");
});

// signup route
app.use(signupRoute);

const PORT: string | number = process.env.BACKEND_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});

export default app;
