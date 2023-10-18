import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const page = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h1>Dev Chat</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
};

export default page;
