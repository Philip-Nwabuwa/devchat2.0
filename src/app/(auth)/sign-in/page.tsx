import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Eye } from "lucide-react";
import GoogleBtn from "@/components/authButton/GoogleBtn";

function Login() {
  const GoogleIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
      className="w-6 h-6"
    >
      <path
        fill="#fbc02d"
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
      ></path>
      <path
        fill="#e53935"
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
      ></path>
      <path
        fill="#4caf50"
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
      ></path>
      <path
        fill="#1565c0"
        d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
      ></path>
    </svg>
  );

  const GithubIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 72 72"
      className="w-8 h-8 fill-white"
    >
      <path d="M36,12c13.255,0,24,10.745,24,24c0,10.656-6.948,19.685-16.559,22.818c0.003-0.009,0.007-0.022,0.007-0.022	s-1.62-0.759-1.586-2.114c0.038-1.491,0-4.971,0-6.248c0-2.193-1.388-3.747-1.388-3.747s10.884,0.122,10.884-11.491	c0-4.481-2.342-6.812-2.342-6.812s1.23-4.784-0.426-6.812c-1.856-0.2-5.18,1.774-6.6,2.697c0,0-2.25-0.922-5.991-0.922	c-3.742,0-5.991,0.922-5.991,0.922c-1.419-0.922-4.744-2.897-6.6-2.697c-1.656,2.029-0.426,6.812-0.426,6.812	s-2.342,2.332-2.342,6.812c0,11.613,10.884,11.491,10.884,11.491s-1.097,1.239-1.336,3.061c-0.76,0.258-1.877,0.576-2.78,0.576	c-2.362,0-4.159-2.296-4.817-3.358c-0.649-1.048-1.98-1.927-3.221-1.927c-0.817,0-1.216,0.409-1.216,0.876s1.146,0.793,1.902,1.659	c1.594,1.826,1.565,5.933,7.245,5.933c0.617,0,1.876-0.152,2.823-0.279c-0.006,1.293-0.007,2.657,0.013,3.454	c0.034,1.355-1.586,2.114-1.586,2.114s0.004,0.013,0.007,0.022C18.948,55.685,12,46.656,12,36C12,22.745,22.745,12,36,12z"></path>
    </svg>
  );

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

          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="Login">Login</TabsTrigger>
            <TabsTrigger value="Register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="Login" className="h-[69dvh]">
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                  Login with your email and password...
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" icon={<Eye />} />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Login</Button>
              </CardFooter>
              <div className="flex flex-row gap-2 justify-center items-center mx-6 mb-6">
                <div className="bg-black h-[1px] w-[20%]" />
                <p>or continue with</p>
                <div className="bg-black h-[1px] w-[20%]" />
              </div>

              <div className="flex justify-center space-x-2 mx-6 mb-6">
                <GoogleBtn/>
                <Button className="w-full">
                  <GithubIcon />
                </Button>
              </div>
            </Card>
          </TabsContent>
          <TabsContent value="Register">
            <Card>
              <CardHeader>
                <CardTitle>Create an Account</CardTitle>
                <CardDescription>
                  Register with your email and password.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="R-email">Email</Label>
                  <Input id="r-email" type="email" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="r-password">password</Label>
                  <Input id="r-password" type="password" icon={<Eye />} />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="c-password">Confirm password</Label>
                  <Input id="c-password" type="password" icon={<Eye />} />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Register</Button>
              </CardFooter>
              <div className="flex flex-row gap-2 justify-center items-center mx-6 mb-6">
                <div className="bg-black h-[1px] w-[20%]" />
                <p>or continue with</p>
                <div className="bg-black h-[1px] w-[20%]" />
              </div>

              <div className="flex justify-center space-x-2 mx-6 mb-6">
                <Button className="w-full">
                  <GoogleIcon />
                </Button>
                <Button className="w-full">
                  <GithubIcon />
                </Button>
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
