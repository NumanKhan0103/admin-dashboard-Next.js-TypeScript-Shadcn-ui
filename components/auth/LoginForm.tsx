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
    FormMessage,
} from "@/components/ui/form";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from "sonner";
import { useRouter } from 'next/navigation';


// login form validation 
const formScheme = z.object({
    email: z.string().min(1, {
        message: "Email is required",
    }).email({
        message: "Please enter a valid email address",
    }),
    password: z.string().min(1, {
        message: "Password is required",
    })
});


export default function LoginPage() {

    const router = useRouter();

    // form validation 
    const form = useForm<z.infer<typeof formScheme>>({
        resolver: zodResolver(formScheme),
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const onSubmit = (data: z.infer<typeof formScheme>) => {

        toast("Login Successfully");

        router.push("/dashboard");
    }

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle> Login </CardTitle>
                    <CardDescription> Log in to your account with you credentials</CardDescription>
                </CardHeader>
                <CardContent className='space-y-2'>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0'
                                                placeholder="Enter Email "
                                                {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0'
                                                placeholder="Enter Password "
                                                {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button className='w-full mt-2'>Sign in</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </>
    )
}