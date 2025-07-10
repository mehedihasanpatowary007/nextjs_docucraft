export function highlightText(text, term) {
  if (!term) return text;

  const parts = text.split(new RegExp(`(${term})`, "gi"));

  return parts.map((part, index) =>
    part.toLowerCase() === term.toLowerCase() ? (
      <span key={index} className="bg-yellow-200 dark:bg-yellow-600 font-semibold">
        {part}
      </span>
    ) : (
      part
    )
  );
}
