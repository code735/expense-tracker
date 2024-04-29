"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signinRoute = void 0;
const express_1 = __importDefault(require("express"));
const zod_1 = require("zod");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userModel_1 = require("../model/userModel");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const JWT_SECRET = process.env.JWT_SECRET_KEY || "JWT_SECRET";
const signinZodSchema = (0, zod_1.object)({
    username: (0, zod_1.string)(),
    password: (0, zod_1.string)()
});
exports.signinRoute = app.post('/signin', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = signinZodSchema.parse(req.body);
        const existingUser = yield userModel_1.User.findOne({ username });
        if (existingUser !== null) {
            bcrypt_1.default.compare(password, existingUser.password).then((result) => {
                if (result) {
                    const token = jsonwebtoken_1.default.sign({ userId: existingUser._id }, JWT_SECRET);
                    res.json({
                        token,
                        status: 'success',
                        id: existingUser._id,
                        name: existingUser.username,
                    });
                }
                else {
                    return res.status(401).json({
                        status: "error",
                        message: "Username/password incorrect"
                    });
                }
            });
        }
    }
    catch (error) {
        return res.status(500).json({ message: error });
    }
}));
