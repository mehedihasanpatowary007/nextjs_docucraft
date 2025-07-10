import Link from "next/link";
import { ArrowBigRight, FileText } from "lucide-react";
import { highlightText } from "@/utils/highlight-text";

function SearchResult({ r, term, setSearchResult, setTerm }) {
  return (
    <Link
      onClick={() => {
        setSearchResult([]);
        setTerm("");
      }}
      href={`/docs/${r.id.toLowerCase()}`}
      className="flex items-start gap-3 p-3 rounded-lg hover:bg-emerald-100 dark:hover:bg-zinc-800 transition group"
    >
      <FileText className="w-5 h-5 text-emerald-500 mt-1" />
      <div className="flex justify-between items-center w-full group">
        <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100 group-hover:underline">
          {highlightText(r.title, term)}
        </h3>
        <span className="group-hover:translate-x-1 duration-500">
          <ArrowBigRight />
        </span>
      </div>
    </Link>
  );
}

export default SearchResult;
