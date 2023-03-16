const express = require('express');
const routerUsers = express.Router();


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

  module.exports = routerUsers;

