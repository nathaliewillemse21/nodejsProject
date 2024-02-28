import express from 'express';
import bodyParser from 'body-parser';
import { products } from '../model/index.js';
const productsRouter = express.Router();
//fetch all products
productsRouter.get('/', (req, res) => {
  try {
    products.fetchProducts(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: 'Failed to retrieve products',
    });
  }
});
productsRouter.get('/:id', (req, res) => {
  try {
    0;
    products.fetchProduct(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: 'Failed to retrieve a product',
    });
  }
});
productsRouter.post('/addProduct', bodyParser.json(), (req, res) => {
  try {
    products.addProduct(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: 'Failed to add new product',
    });
  }
});

productsRouter.delete('/delete/:id', bodyParser.json(), (req, res) => {
    try {
        products.deleteProduct(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to delete a product.',
        })
    };
})
productsRouter.patch('/update/:id', bodyParser.json(), (req, res) => {
  try {
    products.updateProduct(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: 'Failed to update a product',
    });
  }
});

export { productsRouter };
