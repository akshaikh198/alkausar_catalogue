
const API_BASE_URL = (
    import.meta.env.VITE_API_BASE_URL ||
    (import.meta.env.DEV ? 'http://localhost:5000' : '')
  ).replace(/\/+$/, '');
  
  export function apiUrl(path) {
    if (!API_BASE_URL) {
      throw new Error(
        'API URL is missing. Set VITE_API_BASE_URL in Netlify.'
      );
    }
  
    return `${API_BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;
  }
  