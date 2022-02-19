import { Router } from 'express'
import { urlencoded } from 'body-parser'
import { IUser } from '../model/user/IUser';
import { userSave } from '../model/user/userModel';
const singupController = Router();
const urlencoderParser = urlencoded({ extended: false })

singupController.get("/singup", (req, res) => {
    res.render('singup')
})

singupController.post("/singup", urlencoderParser, (req, res) => {
    const objUser: IUser = {
        ID_USER: 1,
        USER_NAME: req.body.email,
        USER_PASS: req.body.password,
        USER_LAST_LOGIN: "2022-02-18"
    }
    userSave({ objUser })
    res.redirect('/')
})

export { singupController }