import { Comment } from "@/interfaces/commentInterface";

export interface Post {
    id: number;
    title: string;
    body: string;
    author: string;
    date: string;
    comments: Comment[];
}