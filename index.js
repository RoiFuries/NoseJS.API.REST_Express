const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
  res.send('hola mi server en express')
});

app.get('/nueva-ruta', (req, res)=>{
  res.send('hola soy una nueva ruta')
});

app.get('/productos', (req, res)=>{
  res.json({
    name: 'Product 1',
    price: 1000
  })
});

app.get('/home', (req, res)=>{
  res.json('hola perras')
});


app.listen(port, ()=>{
  console.log('mi port ' + port);
});


