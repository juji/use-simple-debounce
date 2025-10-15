// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import preact from '@astrojs/preact';
import svelte from '@astrojs/svelte';
import solidJs from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react({
      include: ['**/react/**']
    }),
    preact({
      include: ['**/preact/**']
    }),
    svelte({
      include: ['**/svelte/**']
    }),
    solidJs({
      include: ['**/solid/**']
    })
  ]
});