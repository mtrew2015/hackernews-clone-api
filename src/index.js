const {GraphQLServer} = require('graphql-yoga')

//1 
const typeDefs = `
type Query {
  info: String!
  feed:[Link!]!
}

type Link {
  id: ID!
  description: String!
  url: String!
}
`
//2 
let links = [{
  id: 'link-0',
  url: 'www.lambdaschool.com', 
  description: 'the most awesome school there is'
}]

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links,
  },
  Link: {
    id: (parent) => parent.id,
    description: (parent) => parent.description,
    url:(parent) => parent.url,
  }
}

//3 
const server = new GraphQLServer({
  typeDefs,resolvers,
})
server.start(() => console.log(`Server is running on localhost:4000`))