
const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL ||
  (import.meta.env.DEV ? "http://localhost:5000" : "")
).replace(/\/+$/, "");

export function apiUrl(path) {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  // Production: use the Netlify serverless function.
  if (import.meta.env.PROD && cleanPath === "/api/products") {
    return "/.netlify/functions/products";
  }

  // Local development: use the local Node.js API.
  if (!API_BASE_URL) {
    throw new Error(
      "API URL is missing. Configure the Netlify Function and MONGO_URI."
    );
  }

  return `${API_BASE_URL}${cleanPath}`;
}
