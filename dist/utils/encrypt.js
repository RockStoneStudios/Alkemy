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
exports.verifyToken = exports.generateSignature = exports.comparePassword = exports.encryptPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// interface RequestWithUserRole extends Request {
//      user : IPayload,
// }
const encryptPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    const salt = yield bcrypt_1.default.genSalt(10);
    return yield bcrypt_1.default.hash(password, salt);
});
exports.encryptPassword = encryptPassword;
const comparePassword = (password, savePassword) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bcrypt_1.default.compare(password, savePassword);
});
exports.comparePassword = comparePassword;
const generateSignature = (payload) => {
    return jsonwebtoken_1.default.sign(payload, process.env.TOKEN_SECRET || "alkemy");
};
exports.generateSignature = generateSignature;
const verifyToken = (req, res, next) => {
    const token = req.get('Authorization');
    try {
        if (token) {
            const payload = jsonwebtoken_1.default.verify(token.split(" ")[1], process.env.TOKEN_SECRET || "alkemy");
            req.user = payload;
            return next();
        }
        return res.status(401).json({ message: "Access Denied" });
    }
    catch (error) {
        console.log(error);
    }
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=encrypt.js.map