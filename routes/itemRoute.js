import express from "express";
import { isAdminOrVendor, isAuthenticated, isVendor } from "../middleware/auth.js";
import {
  createProduct,
  createProductReview,
  deleteProduct,
  deleteReview,
  getAllProducts,
  getProductReviews,
  ProductDetails,
  updateProduct,
} from "../controllers/itemController.js";
const router = express.Router();

router.route("/create-product").post(isAuthenticated, createProduct);

router.route("/get-product").get(getAllProducts);

router.route("/product/:id").get(ProductDetails);

router
  .route("/update-product/:id")
  .put(isAuthenticated, isAdminOrVendor, updateProduct);

router
  .route("/delete-product/:id")
  .delete(isAuthenticated, isAdminOrVendor, deleteProduct);

router.route("/review-product").put(isAuthenticated, createProductReview);

router
  .route("/product-review")
  .get(isAuthenticated, isAdminOrVendor, getProductReviews);

router
  .route("/product/:productId/reviews/:reviewId")
  .delete(isAdminOrVendor, isAuthenticated, deleteReview);

export default router;
