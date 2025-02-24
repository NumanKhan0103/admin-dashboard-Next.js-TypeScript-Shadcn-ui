import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


import { Post } from "@/interfaces/postInterface";
import posts from "@/services/postService";
import Link from "next/link";


interface PostsTableProps {
  // posts: Post[];
  title?: string;
  limit?: number;
}

export default function PostsTable({ title, limit }: PostsTableProps) {


  // sort posts by date in descending order
  const sortedPost = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // filter posts to limit
  const filterPost = limit ? sortedPost.slice(0, limit) : sortedPost;

  return (
    <div className="mt-10">
      <h3 className="text-2xl mb-4 font-semibold">
        {title ? title : 'Posts'}
      </h3>
      <Table>
        <TableCaption>A list of recent posts.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Title</TableHead>
            <TableHead className="hidden md:table-cell">Author</TableHead>
            <TableHead className="hidden md:table-cell text-right">Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            filterPost.map((post: Post) => (
              <TableRow  key={post.id}>
                <TableCell className="font-medium">{post.title}</TableCell>
                <TableCell className="hidden md:table-cell">{post.author}</TableCell>
                <TableCell className="hidden md:table-cell text-right">{post.date}</TableCell>
                <TableCell className="text-right">
                  <Link href={`/posts/${post.id}`}>
                    <button className="bg-blue-500 text-white px-2 py-1 rounded me-2">View</button>
                  </Link>
                  {/* <Link href={`/posts/edit/${post.id}`}>
                    <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>
                  </Link> */}
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>

    </div>
  )
}