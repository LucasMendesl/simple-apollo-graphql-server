import uuid from 'node-uuid';
import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema({
    id: { type: String, default: uuid.v1 },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    books: {
        type: [String],
        required: true        
    }
});

const authors = mongoose.model('author', authorSchema, 'authors');

export default authors;