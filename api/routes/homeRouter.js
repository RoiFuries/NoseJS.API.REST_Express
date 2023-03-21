const express = require('express');
const routerHome = express.Router();
const router = express.Router();



routerHome.get('/', (req, res)=>{
  res.json('hola perras')
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

module.exports = routerHome;
