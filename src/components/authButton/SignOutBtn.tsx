"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

const SignOut = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function loginWithGoogle() {
    setLoading(true);
    try {
      await signOut();
      console.log("signed out");

      router.push("/sign-in");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button variant="ghost" onClick={loginWithGoogle} loading={loading}>
      {loading ? null : <LogOut className="w-4 h-4" />}
    </Button>
  );
};

export default SignOut;
