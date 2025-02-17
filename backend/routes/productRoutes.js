import express from 'express';
import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

const router = express.Router();

// @description - fetch all products
// @routes - GET /api/products
// @access - PUBLIC
router.get('/', asyncHandler(async(req,res) => {
  const products = await Product.find({ })
  res.json(products)
}))

// @description - fetch single product
// @routes - GET /api/products/:id
// @access - PUBLIC
router.get('/:id',asyncHandler(async(req,res) => {
  const product = await Product.findById(req.params.id)

  if(product){
    res.json(product)
  }
  else{
    res.status(404);
    throw new Error('Product not found')
  }
}))

export default router;