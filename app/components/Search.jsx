"use client";
import { useDebounce } from "@/hooks/useDebounce";
import { Search as SearchIcon } from "lucide-react";
import { useState } from "react";
import SearchResult from "./SearchResult";

const Search = ({ docs }) => {
  const [searchResult, setSearchResult] = useState([]);
  const [term, setTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const doSearch = useDebounce((term) => {
    setLoading(true);
    const foundItems = docs.filter((doc) =>
      doc.title.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResult(foundItems);
    setLoading(false);
  }, 500);

  const handleChange = (e) => {
    const value = e.target.value;
    setTerm(value);
    setSearchResult([]);
    doSearch(value);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Input Box */}
      <div className="relative">
        <input
          type="text"
          id="navbar-search"
          value={term}
          onChange={handleChange}
          placeholder="Search documentation..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-sm text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
        />
        <SearchIcon
          className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500 dark:text-zinc-400"
          strokeWidth={1.5}
        />
      </div>

      {/* Result Box */}
      {term && (
        <div className="absolute z-10 mt-2 w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-lg max-h-72 overflow-y-auto">
          {loading ? (
            <div className="p-4 text-sm text-zinc-500 dark:text-zinc-400 animate-pulse">
              Loading...
            </div>
          ) : searchResult.length === 0 ? (
            <div className="p-4 text-sm text-zinc-500 dark:text-zinc-400">
              No result found.
            </div>
          ) : (
            searchResult.map((r) => (
              <SearchResult
                key={r.id}
                r={r}
                term={term}
                setSearchResult={setSearchResult}
                setTerm={setTerm}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
