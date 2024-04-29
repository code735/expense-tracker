"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET_KEY || "JWT_SECRET";
const verifyUser = (req, res, next) => {
    const headers = req.headers['authorization'];
    const token = (headers === null || headers === void 0 ? void 0 : headers.split(" ")[1]) || "";
    const verifiedUser = jsonwebtoken_1.default.verify(token, JWT_SECRET);
    // console.log('verifiedUser',verifiedUser)
    if (verifiedUser) {
        next();
    }
    else {
        return res.sendStatus(403);
    }
};
exports.verifyUser = verifyUser;
