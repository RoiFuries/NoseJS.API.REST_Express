const faker = require ('faker');

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
    return this.products.find(item => item.id === id );

  };
  async update(id, cambios){
    const index =  this.products.findIndex(item => item.id === id );
    if(index === -1 ){
      throw new Error ('producto no encontrado')
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
      throw new Error ('producto no encontrado')
    }
    this.products.splice(index, 1)
    return{
      id,
      message: 'todo salio bien'
    }
  }

}

module.exports = ProductsService;
