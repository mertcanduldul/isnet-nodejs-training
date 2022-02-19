import { Router } from 'express'
import { ProductModel } from '../model/product/productModel';
const homeController = Router();

homeController.get("/", (req, res) => {
    ProductModel.find({}, (err, productData) => {
        if (!err)
            res.render('home', { productData: productData })
        else
            res.redirect('home')
    })


})

export { homeController }