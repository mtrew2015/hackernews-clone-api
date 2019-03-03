const { GraphQLServer } = require('graphql-yoga');

let links = [
	{
		id: 'link-0',
		url: 'www.lambdaschool.com',
		description: 'the most awesome school there is'
	}
];

let idCount = links.length;

const resolvers = {
	Query: {
		info: () => `This is the API of a Hackernews Clone`,
		feed: () => links
	},
	Mutation: {
		post: (parent, args) => {
			const link = {
				id: `link-${idCount++}`,
				description: args.description,
				url: args.url
			};
			links.push(link);
			return link;
		}
	}
};

//3
const server = new GraphQLServer({
	typeDefs: './src/schema.graphql',
	resolvers
});
server.start(() => console.log(`Server is running on localhost:4000`));
