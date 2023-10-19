import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import GoogleBtn from "@/components/authButton/GoogleBtn";
import GithubBtn from "@/components/authButton/GithubBtn";
import { MagicLinkLogin } from "@/components/MagicLink";

function Login() {

  return (
    <main className=" grid lg:grid-cols-2 gap-10 px-10 py-10">
      <div className="flex justify-center items-center">
        <Tabs defaultValue="Login" className="md:w-[500px] col-span-1">
          <div className="flex flex-row items-center justify-center gap-4 mb-8">
            <Image
              src="/images/Logo.png"
              alt="logo"
              width={100}
              height={100}
              className="w-12 h-12"
            />
            <h1 className="text-4xl font-bold">Dev Chat</h1>
          </div>
          <TabsContent value="Login" className="h-[69dvh]">
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                  Login Via Magic Link.
                </CardDescription>
              </CardHeader>
              <div className="mx-6 mb-6">
              <MagicLinkLogin/>

              </div>
              <div className="flex flex-row gap-2 justify-center items-center mx-6 mb-6">
                <div className="bg-black h-[1px] w-[20%]" />
                <p>or continue with</p>
                <div className="bg-black h-[1px] w-[20%]" />
              </div>

              <div className="flex justify-center space-x-2 mx-6 mb-6">
                <GoogleBtn/>
               <GithubBtn/>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <div className="cols-span-1">
        <Image
          src="/images/Sign-in.svg"
          className="hidden lg:flex w-full h-full"
          width={100}
          height={100}
          alt={""}
        />
      </div>
    </main>
  );
}

export default Login;
