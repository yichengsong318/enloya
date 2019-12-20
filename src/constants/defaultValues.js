export const defaultLocale = "en";

export const localeOptions = [
  { id: "en", name: "English - LTR", direction: "ltr" },
  { id: "es", name: "Español", direction: "ltr" }
];

export const apiConfig = {
  apiURL: process.env.NODE_ENV === "development" ? "http://localhost:3030/" : "http://backend.next.enloya.com/"
};