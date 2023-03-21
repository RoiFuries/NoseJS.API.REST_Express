const express = require('express');
const routerUsers = express.Router();
const router = express.Router()


routerUsers.get('/', (req, res) => {

    const { limit, offset } = req.query;
    if(limit && offset){
      res.json({
        limit,
        offset
      });
    }else {
      res.send('hola esta es la route de users');
      // console.log('solo estoy consologeando para ver que pedal');

    }
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

  module.exports = routerUsers;

