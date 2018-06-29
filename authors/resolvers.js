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
            let edit = Author.findOneAndUpdate({ id }, { name, age, books });
            return edit;
        }
    }
}

export default resolvers;