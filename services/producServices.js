const faker = require ('faker');
const boom = require('@hapi/boom');

class ProductsService {

  constructor(){
    this.products = [];
    this.generate();
  }

  generate(){
    const limit = 100;
    for (let index = 0; index < limit; index++){
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(),10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean()
        });
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data,
      message:'woooo',
    }
    this.products.push(newProduct);
    return newProduct;

  };

  find(){
    return new Promise((resol, reje)=>{
      setTimeout(()=>{
        resol(this.products);
      }, 5000);
    });
  };
  async findOne(id){
    const product =  this.products.find(item => item.id === id );
    if(!product){
      throw boom.notFound('no encontamos tu produco, lo siento nene')
    }
    if(product.isBlock){
      throw boom.conflict('Nene este producto esta igual como te tiene tu ex... bloqueado')
    }
    return product

  };
  async update(id, cambios){
    const index =  this.products.findIndex(item => item.id === id );
    if(index === -1 ){
      throw boom.notFound('producto no encontrado nene')
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...cambios,
    }
    return this.products[index]
  }

  async delete(id){
    const index =  this.products.findIndex(item => item.id === id );
    if(index === -1 ){
      throw boom.notFound('tampoco se encontro nene')
    }
    this.products.splice(index, 1)
    return{
      id,
      message: 'todo salio bien'
    }
  }

}

module.exports = ProductsService;
