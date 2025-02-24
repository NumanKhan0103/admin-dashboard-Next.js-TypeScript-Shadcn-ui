import Image from "next/image";
import DashboardCard from "@/components/dashboard/DashboardCard";
import PostsTable from "@/components/post/PostsTable";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";

export default function Home() {
  return (
      <>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">

        <DashboardCard 
         title="Posts" 
         count={100} 
         icon={ <Newspaper className="text-slate-500 dark:text-slate-200" size={72} />}  
        />
        <DashboardCard 
         title="Categories" 
         count={10} 
         icon={ <Folder className="text-slate-500 dark:text-slate-200" size={72} />}  
        />
        <DashboardCard 
         title="Users" 
         count={763} 
         icon={ <User className="text-slate-500 dark:text-slate-200" size={72} />}  
        />
        <DashboardCard 
         title="Comments" 
         count={1246} 
         icon={ <MessageCircle className="text-slate-500 dark:text-slate-200" size={72} />}  
        />
      </div>

      <PostsTable title="Recent Posts" limit={5} />
      
      </>
  );
}
