"use client";
import React from 'react';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from "sonner";
import { useRouter } from 'next/navigation';
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
        <Card className="border-0 shadow-none">
            <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Log in to your account with your credentials</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-xs uppercase">Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="bg-slate-100 border-0"
                                            placeholder="Enter Email"
                                            {...field}
                                        />
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
                                    <FormLabel className="text-xs uppercase">Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="password"
                                            className="bg-slate-100 border-0"
                                            placeholder="Enter Password"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full bg-[#0F172A]" size="lg">
                            Sign in
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}