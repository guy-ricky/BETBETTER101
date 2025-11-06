export function deSlug(s: string) {
  return s.replace(/-/g, " ");
}

export function toTitle(s: string) {
  return s.replace(/\b\w/g, (m) => m.toUpperCase());
}
