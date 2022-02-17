import express from 'express'
export const loginController = express.Router();
const session = 'express-session'
import { ILogin } from '../model/IHome';

loginController.post("/login", (req, res) => {
    const dt: ILogin = req.body;
    if (dt.email === "a" && dt.password === "a") {
        const user = {
            name: "a",
            email: "a"
        }
        
    }
})