import { resolve } from 'path';
import { defineConfig } from 'vite';

// Static multi-page build: every page ships its full content in HTML (no client rendering),
// so crawlers and reviewers see the same text as visitors.
export default defineConfig({
  server: { port: 3000, host: '0.0.0.0' },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        terms: resolve(__dirname, 'terms.html'),
      },
    },
  },
});
