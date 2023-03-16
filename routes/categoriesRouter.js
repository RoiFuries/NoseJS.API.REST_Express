const express = require('express');

const routerCategories = express.Router();

routerCategories.get('/:catedoryId/products/:productId', (req, res) =>{
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  })
});

module.exports = routerCategories;

