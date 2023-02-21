import mongoose, { model, Schema, Document } from "mongoose";

interface Data {
    title: string,
    description: string
};

interface PostData extends Data, Document{};

const postSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    }
});

const PostModels = model<PostData>("Posts collections", postSchema);

export default PostModels;