import { Meteor } from 'meteor/meteor';
import Links from '/imports/api/links';
// import { makeExecutableSchema } from "graphql-tools"
import { ApolloServer, gql } from 'apollo-server-express'
import { WebApp } from 'meteor/webapp'
import { getUser } from 'meteor/apollo'

// import typeDefs from './schema'
// import resolvers from './resolvers'
const typeDefs = `
type Query {
  hi: String 
}
`
const resolvers = () => { }
const server = new ApolloServer({
  typeDefs,
  // resolvers,
  // context: async ({ req }) => ({
  //   user: await getUser(req.headers.authorization)
  // })
})

server.applyMiddleware({
  app: WebApp.connectHandlers,
  path: '/graphql'
})

WebApp.connectHandlers.use('/graphql', (req, res) => {
  if (req.method === 'GET') {
    res.end()
  }
})

console.log('in main.js');

Meteor.startup(() => {
  console.log('Meteor starting up...');

});
