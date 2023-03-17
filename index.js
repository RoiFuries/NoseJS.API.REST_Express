const express = require('express');
const routerApi = require('./routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');


const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res)=>{
  res.send('hola mi server en express')
});

app.get('/nueva-ruta', (req, res)=>{
  res.send('hola soy una nueva ruta')
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, ()=>{
  console.log('ya estoy prendido en el puerto: ' + port + ' nene');
});
