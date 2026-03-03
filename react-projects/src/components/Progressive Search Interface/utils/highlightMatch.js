export default function highlightMatch(text, keyword) {
  if (!keyword) return text

  const parts = text.split(new RegExp(`(${keyword})`, "gi"))

  return parts.map((part, i) =>
    part.toLowerCase() === keyword.toLowerCase() ? (
      <span
        key={i}
        className="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-blue-400 after:origin-left after:animate-underline"
      >
        {part}
      </span>
    ) : (
      part
    )
  )
}