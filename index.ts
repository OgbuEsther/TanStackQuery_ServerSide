import express, { Application, Request, Response } from "express";

import PostModels from "./Models/post.models";

import cors from "cors";
import mongoose from "mongoose";

const port: number = 3400;

const URL = "mongodb://localhost/Tanstack"

const app: Application = express();

app.use(express.json());
app.use(cors());

mongoose.connect(URL);

// Controllers & Routes together:

// Get all post:
app.get("/api/post/getposts", (req: Request, res: Response) =>{
    const retrievePosts = PostModels.find();
    res.status(200).json(retrievePosts)
})

// Get one post:
app.get("/api/post/getposts/:id", (req: Request, res: Response) =>{
    const retrieveSinglePosts = PostModels.findById(req.params.id);
    res.status(200).json(retrieveSinglePosts)
})

// Create Post:
app.post("api/post/createpost", (req: Request, res: Response) =>{
    const { title, description } = req.body;
    const createdPost = PostModels.create({
        title,
        description
    });
    res.status(201).json(createdPost)
})

// Edit single post:
app.patch("/api/post/editpost/:id", (req: Request, res: Response) =>{
    const { title } = req.body;
    const editpost = PostModels.findByIdAndUpdate(req.params.id, {
        title
    });
    res.status(200).json(editpost)
})

// Delete single post:
app.delete("/api/post/editpost/:id", (req: Request, res: Response) =>{
    const deletdpost = PostModels.findByIdAndRemove(req.params.id);
    res.status(200).json(deletdpost)
})

app.listen(port, () =>{
    console.log("")
    console.log("Server is created and up and running on port", port)
})