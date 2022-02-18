import { Router } from 'express'
const dashboardController = Router();

dashboardController.get("/dashboard", (req, res) => {
    res.render('dashboard')
})

export { dashboardController }