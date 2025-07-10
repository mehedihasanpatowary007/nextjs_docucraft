import { getDocumentsContent } from "@/lib/doc";
import Link from "next/link";
import { format } from "date-fns";
import { Link2 } from "lucide-react";

async function ContentDisplay({ id }) {
  const documentContent = await getDocumentsContent(id);

  return (
    <article className="max-w-5xl mx-auto px-4 py-10">
      {/* Header */}
      <header className="mb-8 border-b border-zinc-200 dark:border-zinc-700 pb-4">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
          {documentContent.title}
        </h1>
        <div className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 flex flex-wrap gap-x-4 gap-y-1">
          <span>
            By{" "}
            <Link
              href={`/authors/${encodeURIComponent(
                documentContent.author.toLowerCase()
              )}`}
              className="font-medium text-emerald-600 hover:underline dark:text-emerald-400"
            >
              {documentContent.author}
            </Link>
          </span>
          <span>•</span>
          <span>{format(new Date(documentContent.date), "dd MMM yyyy")}</span>
          <span>•</span>
          <Link
            href={`/categories/${encodeURIComponent(
              documentContent.category.toLowerCase()
            )}`}
            className="capitalize text-emerald-600 hover:underline dark:text-emerald-400"
          >
            {documentContent.category}
          </Link>
        </div>
      </header>

      {/* Tags */}
      <div className="mb-6 flex flex-wrap gap-2">
        {documentContent.tags.map((tag) => (
          <Link
            key={tag}
            href={`/tags/${encodeURIComponent(tag).toLowerCase()}`}
            className="bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-xs font-medium px-3 py-1 rounded-full hover:bg-emerald-100 dark:hover:bg-emerald-800 transition flex items-center gap-2"
          >
            <Link2/>{tag}
          </Link>
        ))}
      </div>

      {/* Content */}
      <section
        className="prose prose-zinc dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: documentContent.contentHtml }}
      />
    </article>
  );
}

export default ContentDisplay;
