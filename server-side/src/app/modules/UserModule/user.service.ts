import { TUser } from "./user.interface";
import { Users } from "./user.model";

const storeUserToDB = async(userData: TUser) => {
    const result = await Users.create(userData);
    return result;
}
const getSingleUserFromDB = async(email:string) => {
    const result = await Users.find({email: email})
    return result;
}

export const UserServices = {
    storeUserToDB,
    getSingleUserFromDB
}