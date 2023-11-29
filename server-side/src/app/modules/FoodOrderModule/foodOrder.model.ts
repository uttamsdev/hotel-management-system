import mongoose from "mongoose";
import { TFoodOrder } from "./foodOrder.interface";

const orderFoodSchema = new mongoose.Schema<TFoodOrder>({
   foodId: Number,
   email: String,
   name: String,
   price: Number,
   img: String
});
export const OrderFood = mongoose.model<TFoodOrder>('food-order', orderFoodSchema);