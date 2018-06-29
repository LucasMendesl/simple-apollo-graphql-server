import resolvers from './resolvers';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
    type Author {
        id: String
        age: Int
        name: String
        books:[String]
    }

    type Query {
        authors: [Author]
        author(id: String): Author
    }

    type Mutation {
        addAuthor(name: String, age: Int, books: [String]): Author
        editAuthor(id: String, name: String, age:Int, books: [String]): Author
    }
`

const Schema = makeExecutableSchema({ typeDefs, resolvers });

export { Schema } 
