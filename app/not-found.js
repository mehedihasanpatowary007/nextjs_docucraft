import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center space-y-4">
      <h1 className="text-5xl font-bold text-red-500">404</h1>
      <p className="text-lg text-zinc-600">Sorry, page not found</p>
      <Link href="/" className="text-emerald-500 underline">
        <Home/>
      </Link>
    </div>
  );
}
