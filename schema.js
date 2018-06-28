import resolvers from './resolvers';
import { makeExecutableSchema } from 'graphql-tools';


const typeDefs = `
    type Author {
        id: Int
        age: Int
        name: String
        books:[String]
    }

    type Query {
        authors: [Author]
        author(id: Int): Author
    }
`

const Schema = makeExecutableSchema({ typeDefs, resolvers });

export default Schema;
