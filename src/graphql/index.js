const { ApolloServer } = require('@apollo/server');
const {ApolloServerPluginLandingPageLocalDefault} = require('@apollo/server/plugin/landingPage/default');
const { expressMiddleware } = require('@apollo/server/express4');
const { loadFilesSync } = require('@graphql-tools/load-files');
const resolvers = require('./resolvers/resolvers');
const { buildContext } = require('graphql-passport');
const { typeDefs: scalarTypeDefs,resolvers: scalarsResolvers } = require('graphql-scalars')

const { RegularExpression } = require('graphql-scalars');
// Creamos nuestro nuevo tipo
const CategoryNameType = new RegularExpression('CategoryNameType', /^[a-zA-Z0-9]{3,8}$/);


const useGraphQL = async (app) => {
  const typeDefs = [
    ...await loadFilesSync('./**/*.graphql'),
    scalarTypeDefs
  ]

  const allResolvers = [
    resolvers,
    scalarsResolvers,
    CategoryNameType
  ]

  const server = new ApolloServer({
    typeDefs,
    allResolvers,
    context: ({ req, res }) => buildContext({ req, res }),
    playground: true,
    plugins: [
      ApolloServerPluginLandingPageLocalDefault({ footer: false }),
    ],
  });

  await server.start();

  app.use(
    '/graphql',
    expressMiddleware(server, {
      context: async ({ req, res }) => buildContext({ req, res }),
    })
  );
};

module.exports = useGraphQL;
