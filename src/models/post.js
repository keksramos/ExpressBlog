import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    },
    creationDate: {
        type: Date,
        default: new Date()
    },
    description: String,
    coverImage: String,
    readTime: String,
});

export const Post = mongoose.model('Post', postSchema);
