import { Schema, model } from 'mongoose'
import { IUser } from "./IUser";

const userSchema = new Schema<IUser>({
    ID_USER: Number,
    USER_NAME: String,
    USER_PASS: String,
    USER_LAST_LOGIN: String
})

const UserModel = model("US_USER", userSchema);

const userSave = (objUser) => (
    UserModel.create({ ID_USER: objUser.ID_USER, USER_NAME: objUser.USER_NAME, USER_PASS: objUser.USER_PASS, USER_LAST_LOGIN: objUser.USER_LAST_LOGIN })
        .then((res) => console.log(res))
        .catch(err => console.log(err))
)

export { userSave, userSchema, UserModel }