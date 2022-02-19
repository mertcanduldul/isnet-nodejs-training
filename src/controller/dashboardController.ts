import { Router } from 'express'
import { urlencoded } from 'body-parser'
import { ProductModel, productSave } from '../model/product/productModel';
import { UserModel } from '../model/user/userModel'
import { IProduct } from '../model/product/IProduct';
const dashboardController = Router();
const urlencoderParser = urlencoded({ extended: false })

dashboardController.get("/dashboard", (req, res) => {
    ProductModel.find({}, (err, productData) => {
        if (!err) {
            UserModel.find({}, (err, userData) => {
                if (!err)
                    res.render('dashboard', { userData: userData, productData: productData });
                else
                    console.log('Bilgi gelirken hata oluştu. İçerik : ', err.message.toString());
            })
        }
        else
            res.redirect('/')
    })
})
dashboardController.get('/dashboard/productlist', (req, res) => {
    res.render('productList')
})

dashboardController.post('/addproduct', urlencoderParser, (req, res) => {
    const objProduct: IProduct = {
        ID_PRODUCT: 0,
        PRODUCT_NAME: req.body.inputProductName,
        PRODUCT_DESCRIPTION: req.body.inputProductDesc,
        PRODUCT_PRICE: req.body.inputProductPrice
    }

    productSave({ objProduct })
    res.redirect('/dashboard/productlist')
})

export { dashboardController }