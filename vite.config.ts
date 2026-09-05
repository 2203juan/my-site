import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Deployed to GitHub Pages at https://<user>.github.io/my-site/ — `base` must
// match the repository name, otherwise every asset 404s in production.
export default defineConfig({
  plugins: [react()],
  base: '/my-site/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'es2020',
    sourcemap: false,
  },
});
