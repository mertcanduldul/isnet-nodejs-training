import express from 'express'
export const homeController = express.Router();
import { homeModel } from '../model/homeModel'




homeController.get("/", (req, res) => {
    res.render('home', homeModel())
})

homeController.get("/login", (req, res) => {
    res.render('login', homeModel())
})

homeController.post("/login", (req, res) => {
    res.render('login')
})