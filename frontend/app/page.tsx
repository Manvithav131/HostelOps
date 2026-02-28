import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-3xl font-bold">HostelOps</h1>

      <Link href="/login" className="text-blue-600">
        Login
      </Link>

      <Link href="/register" className="text-blue-600">
        Register
      </Link>
    </div>
  );
}