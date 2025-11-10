// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import svelte from '@astrojs/svelte';
import solidJs from '@astrojs/solid-js';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://use-simple-debounce.jujiplay.com',

  integrations: [
    react({
      include: ['**/react/**'],
    }),
    svelte({
      include: ['**/svelte/**'],
    }),
    solidJs({
      include: ['**/solid/**'],
    }),
  ],

  adapter: netlify(),
});