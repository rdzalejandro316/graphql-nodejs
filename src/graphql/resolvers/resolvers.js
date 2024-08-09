const { getProduct, getProducts, addProduct, updateProduct, deleteProduct, } = require('./product.resolvers');
const { login } = require('./auth.resolvers');
const { addCategory, getCategory } = require('./category.resolvers');

const resolvers = {
  Query: {
    hello: () => 'Hola mundillo',
    getPerson: (_, args) => `Hello, my name is ${args.name}, I'm ${args.age}`,
    getBoolean: () => true,
    getFloat: () => 1.123,
    //Products
    getProduct,
    getProducts,
    getCategory
  },
  Mutation: {
    addProduct,
    updateProduct,
    deleteProduct,
    login,
    addCategory,
  },
};

module.exports = resolvers;
