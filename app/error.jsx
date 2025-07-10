"use client";

import { useEffect } from "react";
import { AlertCircle, Home, RefreshCcw } from "lucide-react";
import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-10">
      <div className="max-w-md text-center space-y-6">
        {/* Icon */}
        <div className="flex justify-center">
          <AlertCircle className="w-16 h-16 text-red-500" />
        </div>

        {/* Headline */}
        <h1 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100">
          Oops! Something went wrong
        </h1>

        {/* Error message */}
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {error?.message || "An unexpected error occurred. Please try again."}
        </p>

        {/* Action buttons */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={()=> reset()}
            title="try again"
            className="px-5 py-2 rounded-md bg-red-500 hover:bg-red-600 text-white font-medium transition"
          >
            <RefreshCcw/>
          </button>

          <Link
            href="/"
            title="go back home"
            className="px-5 py-2 rounded-md bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 text-zinc-800 dark:text-white font-medium transition"
          >
           <Home/>
          </Link>
        </div>
      </div>
    </div>
  );
}
