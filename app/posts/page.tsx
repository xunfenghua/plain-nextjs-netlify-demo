import prisma from "@/lib/prisma";
import Link from "next/link";

interface PostsProps {
  searchParams: { page?: string };
}

export default async function Posts({ searchParams }: PostsProps) {
  const page = parseInt(searchParams.page || "1");
  const postsPerPage = 5;
  const offset = (page - 1) * postsPerPage;

  // Fetch posts with pagination
  const posts = await prisma.post.findMany({
    skip: offset,
    take: postsPerPage,
    orderBy: {
      createdAt: "desc",
    },
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  });

  // Fetch total post count to calculate pagination links
  const totalPosts = await prisma.post.count();
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start p-8">
      <h1 className="text-4xl font-bold mb-8 text-[#333333]">Posts</h1>

      <ul className="w-full max-w-4xl space-y-6">
        {posts.map((post) => (
          <li key={post.id} className="border p-4 rounded-lg shadow-sm">
            <Link href={`/posts/${post.id}`} className="text-2xl font-semibold text-blue-600 hover:underline">
              {post.title}
            </Link>
            <p className="text-sm text-gray-500">
              by {post.author?.name || "Anonymous"}
            </p>
            <p className="text-xs text-gray-400">
              {new Date(post.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <div className="flex justify-center space-x-4 mt-8">
        {page > 1 && (
          <Link href={`/posts?page=${page - 1}`}>
            <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
              Previous
            </button>
          </Link>
        )}
        {page < totalPages && (
          <Link href={`/posts?page=${page + 1}`}>
            <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
              Next
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
