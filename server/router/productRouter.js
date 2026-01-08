import express from "express"
import { 
    createProductController,
    getProductController
 } from "../controller/productController.js"
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js"
import formidable from "express-formidable"

const router = express.Router();

//route 
router.post(
    "/create-product",
    requireSignIn,
    isAdmin,
    formidable(),
    createProductController
)

// router.put(
//     "/update-product/:id",
//     requireSignIn,
//     isAdmin,
//     formidable(),
//     updateProductController
// )

router.get(
    "/get-products", 
    getProductController
)

//get products
// router.get("get-product", getProductController);




export default router;