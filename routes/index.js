const productsRouter = require('./productsRouter');
const usersRouter = require('./usersRouter');
const usersCategories = require('./categoriesRouter');
const homeRouter = require('./homeRouter')



function routerApi (app) {
  app.use('/api/products', productsRouter);
  app.use('/users', usersRouter);
  app.use('/categories', usersCategories);
  app.use('/home', homeRouter)


};

module.exports = routerApi;
