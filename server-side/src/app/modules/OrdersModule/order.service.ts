import { TOrderRoom } from "./order.interface"
import { OrderRoom } from "./order.model"

const orderRoomToDB = async(orderRoomData : TOrderRoom) => {
    const result = await OrderRoom.create(orderRoomData);
    return result;
}

const getAllOrdersRoomFromDB = async() => {
    const result = await OrderRoom.find();
    return result;
}

const getOrderRoomByEmailFromDB = async(email: string) => {
    const result = await OrderRoom.find({email: email});
    return result;
}

const deleteOrderRoomFromDB = async(id: number) => {
    const result = await OrderRoom.deleteOne({roomId: id});
    return result;
}

export const OrderServices = {
    orderRoomToDB,
    getAllOrdersRoomFromDB,
    getOrderRoomByEmailFromDB,
    deleteOrderRoomFromDB
}