import mongoose from "mongoose";

// Create sample authors based on the schema
export const authors = [
  {
    _id: new mongoose.Types.ObjectId(),
    name: "John Doe",
    email: "john@doe.com",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Jane Doe",
    email: "jane@doe.com",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Juan Camaney",
    email: "juan@doe.com",
  },
];

// Create sample posts based on the schema

export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    title: "First Was Rust Worth It? From JavaScript to Rust, three years in.",
    author: authors[0]._id,
    content:
      "A few years ago, I dropped everything to focus 100% on WebAssembly.",
    coverImage:
      "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*lgWp1uYIo4i4Y62dBBhGvA.png",
    createdAt: new Date(),
    readTime: "6 min read",
    trending: true,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "Kubernetes And Kernel Panics",
    author: authors[1]._id,
    content:
      "With a recent effort to reduce customer (engineers, not end users)",
    coverImage:
      "https://miro.medium.com/v2/resize:fill:400:268/0*5hJgvT1vt6PZRMd3",
    createdAt: new Date(),
    readTime: "6 min read",
    trending: true,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "A personal, non-partisan perspective on the Israel-Hamas war.",
    author: authors[2]._id,
    createdAt: new Date(),
    description:
      "People ask me all the time if I am “pro-Israel” because I am a Jew who has lived in Israel.",
    coverImage:
      "https://miro.medium.com/v2/resize:fill:400:268/1*IraA41cyapCYG2vMH2Tvxw.png",
    readTime: "6 min read",
    trending: true,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "TimeGPT: The First Foundation Model for Time Series Forecasting",
    author: authors[1]._id,
    createdAt: new Date(),
    description:
      "The field of time series forecasting is going through a very exciting period.",
    coverImage:
      "https://miro.medium.com/v2/resize:fill:400:268/1*2RRtiHusrykTmfM7FcUffw.jpeg",
    readTime: "6 min read",
    trending: true,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "My Husband Could Never Find Out.",
    author: authors[0]._id,
    createdAt: new Date(),
    description:
      "I’d set my alarm an hour early, showered, styled my hair, and applied makeup while trying to stay calm.",
    coverImage:
      "https://miro.medium.com/v2/resize:fill:400:268/0*dZJ-oQFBgymsAleq",
    readTime: "6 min read",
    trending: true,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "How I scaled Amazon’s Load Generator to run on 1000s of machines",
    author: authors[2]._id,
    createdAt: new Date(),
    description: "Moving from a single-host process to a distributed system",
    coverImage:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*lgWp1uYIo4i4Y62dBBhGvA.png",
    readTime: "10 min read",
    trending: true,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "Sheet, dialog, or snackbar — what should a designer go for?",
    author: authors[0]._id,
    createdAt: new Date(),
    description:
      "When crafting mobile app interfaces, designers continually encounter the necessity to make decisions.",
    coverImage:
      "https://miro.medium.com/v2/resize:fill:400:268/1*VbCkG39Xi9-yQF8rRUVJWQ.jpeg",
    readTime: "6 min read",
    trending: false,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "18 Life Lessons I’d Give My 18-Year-Old Self",
    author: authors[1]._id,
    createdAt: new Date(),
    description:
      "I started writing my blog when I was a few months shy of 18 years old.",
    coverImage:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*aaUaft0AxPSZuCNb.jpg",
    readTime: "5 min read",
    trending: false,
  },
];

// Create sample comments based on the schema

export const comments = [
  {
    postId: posts[0]._id,
    author: authors[1]._id,
    content: "This is the first comment.",
    createdAt: new Date(),
  },
  {
    postId: posts[1]._id,
    author: authors[0]._id,
    content: "This is the second comment.",
    createdAt: new Date(),
  },
  {
    postId: posts[3]._id,
    author: authors[0]._id,
    content: "This is the third comment.",
    createdAt: new Date(),
  },
];
