
import transporter from "../../sendMail";
import { TOrderRoom } from "./order.interface"
import { OrderRoom } from "./order.model"

const orderRoomToDB = async(orderRoomData : TOrderRoom) => {
    const result = await OrderRoom.create(orderRoomData);
    // if(result){
    //     // Nodemailer setup
    //     const info = await transporter.sendMail({
    //       from: '"Uttam Kumar Saha" <mail@uttamsaha.com>',
    //       to: `${result.email}`,
    //       subject: 'Booking Room Confirmed',
    //       html: `<p>Hello Sir, This is to inform you that your room booking is successful. Here is your order summary attached below.Thank you for being with us see you soon.. Team Hotel Redisons.
    //        Email: ${result.email}, <br> Room ID: <b>${result.roomId}</b> <br>
    //         Room Name: <b>${result.name}</b> <br>
    //         Start Date: <b>${result.startDate}</b> <br>
    //         End Date: <b>${result.endDate}</b> <br>
    //         Total Price: <b>${result.price}</b> <br> </p>
    //       `,
    //     });
  
    //     console.log('Message sent: %s', info.messageId);
       
    // }
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