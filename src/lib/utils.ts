export function cl(...classes: (string | boolean | null | undefined)[]) {
  return classes.filter((c) => c && typeof c === "string").join(" ");
}
