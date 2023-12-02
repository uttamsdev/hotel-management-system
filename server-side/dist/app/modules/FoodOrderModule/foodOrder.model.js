"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderFood = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const orderFoodSchema = new mongoose_1.default.Schema({
    foodId: Number,
    email: String,
    name: String,
    price: Number,
    img: String
});
exports.OrderFood = mongoose_1.default.model('food-order', orderFoodSchema);
