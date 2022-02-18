import { Schema, model, Mongoose } from 'mongoose'
import { IProduct } from "./IProduct";

const productSchema = new Schema<IProduct>({
    ID_PRODUCT: Number,
    PRODUCT_NAME: String,
    PRODUCT_DESCRIPTION: String,
    PRODUCT_PRICE: Number
})
const ProductModel = model("PR_PRODUCT", productSchema);

const productSave = ({ objProduct }) => {
    ProductModel.create({ objProduct })
        .then((res) => console.log(res))
        .catch(err => console.log(err))
}
export { productSave }