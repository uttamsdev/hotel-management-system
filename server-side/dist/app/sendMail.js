"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const transporter = nodemailer_1.default.createTransport({
    host: "mail.uttamsaha.com",
    port: 465,
    // secure: false,
    auth: {
        user: "mail@uttamsaha.com",
        pass: ""
    },
    // tls: { rejectUnauthorized: false }  
});
exports.default = transporter;
