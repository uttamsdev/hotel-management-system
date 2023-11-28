import { TUser } from "./user.interface";
import { Users } from "./user.model";

const storeUserToDB = async(userData: TUser) => {
    if (await Users.isUserExists(userData.email)) {
        console.log("User exist for: ",userData.email)
        return;
      } else {
        const result = await Users.create(userData)
        return result;
      }
   
}
const getSingleUserFromDB = async(email:string) => {
    const result = await Users.findOne({email: email})
    return result;
}

export const UserServices = {
    storeUserToDB,
    getSingleUserFromDB
}