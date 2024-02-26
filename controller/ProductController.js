import express from 'express';
import bodyParser from 'body-parser';
import { products } from '../model/index.js';
const productRouter = express.Router();
productRouter.get('/', (req, res) => {
  try {
    products.fetchProducts(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: 'Failed to retrieve a product',
    });
  }
});
productRouter.get('/:id', (req, res) => {
  try {
    products.fetchProducts(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: 'failed to get it',
    });
  }
});
productRouter.post('/addProduct', bodyParser.json(), (req, res) => {
  try {
    products.addProduct(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: 'Failed to add new product',
    });
  }
});
export { productRouter };
