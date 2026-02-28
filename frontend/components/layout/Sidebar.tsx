"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-5">
      <h2 className="text-2xl font-bold mb-8">HostelOps</h2>

      <nav className="space-y-4">
        <Link href="/dashboard" className="block hover:text-blue-400">
          Dashboard
        </Link>

        <Link href="/admin" className="block hover:text-blue-400">
          Admin
        </Link>

        <Link href="/login" className="block hover:text-blue-400">
          Logout
        </Link>
      </nav>
    </aside>
  );
}