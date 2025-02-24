import PostsTable from "@/components/post/PostsTable";
import BackButton from "@/components/BackButton";
import PostsPagination from "@/components/post/PostsPagination";

export default function PostsPage(){

    return (
        <>

         <BackButton text="Back to Posts" link="/" />
         <PostsTable />
         <PostsPagination />
        </>
       
    )

}