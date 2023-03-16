const express = require('express');
const routerApi = require('./routes');


const app = express();
const port = 3000;

app.get('/', (req, res)=>{
  res.send('hola mi server en express')
});

app.get('/nueva-ruta', (req, res)=>{
  res.send('hola soy una nueva ruta')
});

routerApi(app);




app.listen(port, ()=>{
  console.log('mi port ' + port);
});


