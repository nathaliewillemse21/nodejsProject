import express from 'express';
import bodyParser from 'body-parser';
import { products } from '../model/index.js';

const productRouter = express.Router();

productRouter.get('/', (req, res) => {
  try {
    products.fetchProducts(req, res);
  } catch (e) {
    res.status(500).json({
      status: 500,
      msg: 'Failed to retrieve products',
    });
  }
});

productRouter.get('/:id', (req, res) => {
  try {
    products.fetchProduct(req, res);
  } catch (e) {
    res.status(500).json({
      status: 500,
      msg: 'Failed to retrieve the product',
    });
  }
});

productRouter.post('/addProduct', bodyParser.json(), (req, res) => {
  try {
    products.addProduct(req, res);
  } catch (e) {
    res.status(500).json({
      status: 500,
      msg: 'Failed to add new product',
    });
  }
});

export { productRouter };
