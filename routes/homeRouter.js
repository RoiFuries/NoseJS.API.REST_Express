const express = require('express')
const routerHome = express.Router()


routerHome.get('/', (req, res)=>{
  res.json('hola perras')
});

module.exports = routerHome;
