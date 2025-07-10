import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Spinning Icon */}
        <Loader2 className="w-10 h-10 animate-spin text-emerald-500" />

        {/* Message */}
        <p className="text-zinc-600 dark:text-zinc-300 text-sm font-medium">
          Loading content, please wait...
        </p>
      </div>
    </div>
  );
}
