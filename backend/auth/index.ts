import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET_KEY || "JWT_SECRET";

export const verifyUser = (req: Request, res: Response, next: NextFunction) => {
  const headers = req.headers['authorization'];
  const token = headers?.split(" ")[1] || "";
  
  const verifiedUser = jwt.verify(token, JWT_SECRET) as { userId: string };

  // console.log('verifiedUser',verifiedUser)

  if ( verifiedUser ) {
    next();
  }
  else {
    return res.sendStatus(403);
  }
}