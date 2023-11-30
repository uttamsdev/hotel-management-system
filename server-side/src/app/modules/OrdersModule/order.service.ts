
import transporter from "../../sendMail";
import { TOrderRoom } from "./order.interface"
import { OrderRoom } from "./order.model"

const orderRoomToDB = async(orderRoomData : TOrderRoom) => {
    const result = await OrderRoom.create(orderRoomData);
    // console.log(result.email)
        // Nodemailer setup
        await transporter.sendMail({
          from: '"Uttam Kumar Saha" <mail@uttamsaha.com>',
          to: `${result?.email}`,
          subject: 'Booking Room Confirmed',
          text: "Your room booking is successful. Thank for ordering. @Team Hotel Redisons"
        });
  
        // console.log('Message sent: %s', info.messageId);
        // console.log("result m mail:",result.email)
    // console.log("emaiL: ",result.email)
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