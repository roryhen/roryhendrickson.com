export function cl(...classes: (string | boolean | null | undefined)[]) {
  return classes.filter((c) => c && typeof c === "string").join(" ");
}

/**
 * Dates from frontmatter are date-only values, parsed as UTC midnight.
 * Formatting without an explicit timeZone shifts them a day backwards
 * for anyone west of UTC.
 */
export function formatDate(date: Date) {
  return date.toLocaleDateString(undefined, {
    dateStyle: "medium",
    timeZone: "UTC",
  });
}

/** Machine-readable YYYY-MM-DD for <time datetime="...">. */
export function toISODate(date: Date) {
  return date.toISOString().slice(0, 10);
}
