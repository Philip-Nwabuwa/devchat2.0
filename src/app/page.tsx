import SignOut from "@/components/authButton/SignOutBtn";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";

const page = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <h1>Dev Chat</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>

      {session?.user.name ? (
        <h1>{session?.user.name}</h1>
      ) : (
        <Link href="/profile" />
      )}

      <SignOut />
    </div>
  );
};

export default page;
