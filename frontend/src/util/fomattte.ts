export const formatter = new Intl.DateTimeFormat("en-IN", {
  month: "short",
  year: "numeric",
  day: "2-digit",
}).format;
