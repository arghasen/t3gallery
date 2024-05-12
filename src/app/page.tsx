import Link from "next/link";
import { db } from "~/server/db";
export const dynamic = "force-dynamic";
import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";


export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const images = await db.query.images.findMany({
    orderBy: (model,{desc}) => desc(model.id),
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="flex flex-wrap gap-4">
        {[...images,...images, ...images].map((image) => (
          <div key={image.id} className="w-48 p-2 flex flex-col">
            <img src={image.url} alt="" />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}

async function CrudShowcase() {
  const latestPost = await api.post.getLatest();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
