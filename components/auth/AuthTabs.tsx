import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function AuthTabs() {
    return (
            <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger 
                        value="login"
                        className="data-[state=active]:bg-white data-[state=active]:text-black"
                    >
                        Login
                    </TabsTrigger>
                    <TabsTrigger 
                        value="register"
                        className="data-[state=active]:bg-white data-[state=active]:text-black"
                    >
                        Register
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="login" className="bg-white rounded-md mt-0 p-6">
                    <LoginForm />
                </TabsContent>
                <TabsContent value="register" className="bg-white rounded-md mt-0 p-6">
                   <RegisterForm />
                </TabsContent>
            </Tabs>
    )
}