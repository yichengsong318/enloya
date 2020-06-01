export const defaultLocale = "en";

export const localeOptions = [
  { id: "en", name: "English - LTR", direction: "ltr" },
  { id: "es", name: "Español", direction: "ltr" }
];

export const appURL = process.env.NODE_ENV === "development" ? "http://localhost:6050/" : "https://next.enloya.com/";

export const apiConfig = {
  apiURL: process.env.NODE_ENV === "development" ? "http://localhost:3030/" : "https://backend.next.enloya.com/",
  apiDomain: process.env.NODE_ENV === "development" ? "http://localhost:3030" : "https://backend.next.enloya.com"
};