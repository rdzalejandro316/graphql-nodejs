const CategoryService = require('./../../services/category.service');
const service = new CategoryService();
const boom = require('@hapi/boom');

const addCategory = async (_, { inputCategory }, context) => {
  const { user } = await context.authenticate('jwt', { session: false });
  if (!user) {
    throw boom.unauthorized('jwt is not valid');
  }
  const newCategory = await service.create(inputCategory);
  return newCategory;
};

const getCategory = async (_, { id }) => {
    console.log(id);
    return await service.findOne(id);    
};

module.exports = { addCategory, getCategory };
