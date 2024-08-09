const ProductsService = require('../../services/product.service');
const service = new ProductsService();

const getProduct = async (_,{id}) => {
  const product = await service.findOne(id);
  return product;
};

const getProducts = async () => {
  const products = await service.find({});
  return products;
};

const addProduct = async (_, {inputProduct}) => {
  const newProduct = await service.create(inputProduct);
  return newProduct;
};

const updateProduct = async (_, {id, inputProduct}) => {
  const updateProduct = await service.update(id,inputProduct);
  return updateProduct;
};

const deleteProduct = async (_, {id}) => {
  const idProduct = await service.delete(id);
  return idProduct;
};

module.exports = { getProduct, getProducts, addProduct,updateProduct,deleteProduct };
