import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: 'standalone',
  }),
  output: 'server',
  vite: {
    plugins: [tailwindcss()],
  },
  security: {
    checkOrigin: true,   // CSRF protection for Actions
  },
});
