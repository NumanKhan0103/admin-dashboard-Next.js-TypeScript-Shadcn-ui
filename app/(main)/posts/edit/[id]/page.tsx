"use client";
import React from 'react';
import BackButton from "@/components/BackButton";
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormDescription,
    FormMessage,
} from "@/components/ui/form";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import posts from "@/services/postService";
import { useParams } from 'next/navigation';
import { toast } from "sonner";


// form validation 
const formScheme = z.object({
    title: z.string().min(1, {
        message: "Title is required",
    }),
    body: z.string().min(1, {
        message: "body is required",
    }),
    author: z.string().min(1, {
        message: "author is required",
    }),
    date: z.string().min(1, {
        message: "date is required",
    }),
});

// get params with type script 
interface PostEditPageProps {
    params: {
        id: string;
    }
}

export default function PostsEditPage({ params }: PostEditPageProps) {

    // Unwrap the params Promise
    const unwrappedParams = React.use(params);

    // Get post by id
    const post = posts.find((post) => post.id === parseInt(unwrappedParams.id));

    // get post by id 
    // const post = posts.find((post) => post.id === parseInt(params.id));

    // form validation 
    const form = useForm<z.infer<typeof formScheme>>({
        resolver: zodResolver(formScheme),
        defaultValues: {
            title: post?.title || '',
            body: post?.body || '',
            author: post?.author || '',
            date: post?.date || ''
        }
    })

    const onSubmit = (data: z.infer<typeof formScheme>) => {

        toast("Post Updated Successfully");

        console.log(data);
    }

    return (
        <>
            <BackButton text="Back to Posts" link="/posts" />
            <h1 className="text-2xl mb-4"> Edit Post</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>Title</FormLabel>
                                <FormControl>
                                    <Input
                                        className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0'
                                        placeholder="Enter Title "
                                        {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* body */}
                    <FormField
                        control={form.control}
                        name="body"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>body</FormLabel>
                                <FormControl>
                                    <Textarea
                                        className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0'
                                        placeholder="Enter Body Text "
                                        {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* author */}
                    <FormField
                        control={form.control}
                        name="author"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>author</FormLabel>
                                <FormControl>
                                    <Input
                                        className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0'
                                        placeholder="Enter Author Name "
                                        {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/*  date */}
                    <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>date</FormLabel>
                                <FormControl>
                                    <Input
                                        className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0'
                                        placeholder="Enter date "
                                        {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className='w-full dark:bg-slate-500 dark:text-white'>Submit</Button>
                </form>
            </Form>
        </>
    )
}