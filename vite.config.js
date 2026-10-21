import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Fixed the package name here!
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths() // Registers your custom path mappings instantly
  ],
});
