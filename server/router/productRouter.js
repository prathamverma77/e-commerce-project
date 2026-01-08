import express from "express";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productPhotoController,
  updateProductController,
} from "../controller/productController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

// CREATE PRODUCT
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

// UPDATE PRODUCT
router.put(
  "/update-product/:pid", // ✅ pid matches controller
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

// GET PRODUCT PHOTO
router.get("/product-photo/:pid", productPhotoController);

// GET SINGLE PRODUCT
router.get("/get-product/:slug", getSingleProductController);

// GET ALL PRODUCTS
router.get("/get-product", getProductController);

// DELETE PRODUCT
router.delete(
  "/delete-product/:pid", // ✅ DELETE instead of GET
  requireSignIn,
  isAdmin,
  deleteProductController
);

export default router;
