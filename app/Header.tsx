"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [dbConfigured, setDbConfigured] = useState(true);

  useEffect(() => {
    const databaseUrl = process.env.NEXT_PUBLIC_DATABASE_URL;
    if (!databaseUrl || databaseUrl === "prisma+postgres://accelerate.prisma-data.net/?api_key=API_KEY") {
      setDbConfigured(false);
    }
  }, []);

  return (
    <header className="w-full bg-white shadow-md py-4 px-8">
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
          Superblog
        </Link>
        {dbConfigured && (
          <div className="space-x-4">
            <Link href="/posts" className="text-blue-600 hover:underline">
              Posts
            </Link>
            <Link href="/posts/new" className="text-blue-600 hover:underline">
              New Post
            </Link>
            <Link href="/users/new" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              New User
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
