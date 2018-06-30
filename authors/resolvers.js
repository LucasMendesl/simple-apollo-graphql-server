import Author from './model';

const resolvers = {
    Query: {
        authors() {
            return Author.find({ });
        },
        author (_, { id }) {
            return Author.findOne({ id });
        }
    },

    Mutation: {
        addAuthor(_, args) {
            let author = new Author({ ...args });
            return author.save();
        },

        editAuthor(_, { id, name, age, books }) {
            return Author.findOneAndUpdate({ id }, { name, age, books });
        },

        removeAuthor(_, { id }) {
            return Author.findOneAndRemove({ id });
        }
    }
}

export default resolvers;