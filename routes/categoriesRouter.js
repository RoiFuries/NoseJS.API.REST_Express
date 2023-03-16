const express = require('express');
const router = express.Router();


const routerCategories = express.Router();

routerCategories.get('/:catedoryId/products/:productId', (req, res) =>{
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  })
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Producto 2',
    price: 2000
  })
});

router.post('/', (req, res) =>{
  const body = req.body;
  res.json({
    message:'created',
    data: body
  });
});

router.patch('/:id', (req, res) =>{
  const { id }= req.params;
  const body = req.body;
  res.json({
    message:'updateado',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) =>{
  const { id }= req.params;
  res.json({
    message:'deleteado',
    id,
  });
});

module.exports = routerCategories;

