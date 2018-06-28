const authors = [{
    id: 21,
    name: 'JK Roling',
    age: 50,
    books: ['Harry Potter 1', 'Harry Potter 2', 'Harry Potter 3']
},{
    id: 34,
    name: 'George RR Martin',
    age: 70,
    books: ['GOT 1', 'GOT 2', 'GOT 3']
}, {
    id: 12,
    name: 'Stephen King',
    age: 60,
    books: ['Movie 1', 'Movie 2', 'Movie 3']
}];

const resolvers = {
    Query: {
        authors: () => {
            return authors;
        },
        author: (root, { id }) => {
            return authors.find(x => x.id === id);
        }
    }
}

export default resolvers;