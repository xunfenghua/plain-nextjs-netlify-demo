// app/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md py-4 px-8">
      <nav className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Superblog</h1>
        <div className="space-x-4">
          <Link href="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          <Link href="/posts" className="text-blue-600 hover:underline">
            Posts
          </Link>
          <Link href="/posts/new" className="text-blue-600 hover:underline">
            New Post
          </Link>
        </div>
      </nav>
    </header>
  );
}
