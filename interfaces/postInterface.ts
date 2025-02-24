import { PostComment } from "@/interfaces/postCommentsInterface";

export interface Post {
    id: number;
    title: string;
    body: string;
    author: string;
    date: string;
    comments: PostComment[];
}