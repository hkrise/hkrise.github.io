// @ts-check
import { defineConfig } from 'astro/config';

// Org GitHub Pages site: https://hkrise.github.io/
export default defineConfig({
  site: 'https://hkrise.github.io',
  base: '/',
  output: 'static',
  build: {
    format: 'directory',
  },
});
