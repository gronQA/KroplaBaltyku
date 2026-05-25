import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://kropla-baltyku.pl',
  integrations: [react(), tailwind()],
  build: {
    assets: 'assets'
  }
});
