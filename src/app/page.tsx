import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";

const mockUrl = [
  "https://utfs.io/f/c2c40d6f-9bbf-438e-8338-1c9bf2cbe202-bd5eua.png",
  "https://utfs.io/f/5c4059e0-548c-46f6-bf67-af4ea58c88d2-8jictd.png",
  "https://utfs.io/f/db123047-9535-4c79-b610-1b65e1819c3a-39m9i2.png",
  "https://utfs.io/f/14940c35-2d23-4dac-a117-ca8c54d3f7d1-navksa.png"
];

const  mockImages = mockUrl.map((url, index) => ({
  id: index+1,
  url
}));
export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="flex flex-wrap gap-4">
        {[...mockImages,...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48 p-2">
            <img src={image.url} alt="" />
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
