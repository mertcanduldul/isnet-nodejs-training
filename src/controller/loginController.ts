import { Router } from 'express'
import { urlencoded } from 'body-parser'
import { UserModel } from '../model/user/userModel';

const loginController = Router();
const urlencoderParser = urlencoded({ extended: false })

loginController.get('/login', (req, res) => {
    res.render('login')
})

loginController.post('/login', urlencoderParser, (req, res) => {
    UserModel.find({
        USER_NAME: req.body.email, USER_PASS: req.body.password
    }, (err, data) => data.length === 1 ? res.redirect('dashboard') : res.render('login'))
})

export { loginController }