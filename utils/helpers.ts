import { format, parseISO, isValid } from "date-fns";

export function formatDate(dateString: string) {
  if (!dateString) return "";

  const date = parseISO(dateString);
  return isValid(date) ? format(date, "do MMMM, yyyy") : "";
}
