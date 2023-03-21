const express = require('express');
const cors = require('cors')
const routerApi = require('./routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whitelist = ['http://localhost:8080', 'https://myapp.com', 'https://nose-js-api-rest-express.vercel.app/' ];
const options = {
  origin: (origin, callback) =>{
    if(whitelist.includes(origin) || !origin){
      callback(null, true);
    } else {
      callback(new Error('no permitido manito'));
    }
  }
}
app.use(cors(options))


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
