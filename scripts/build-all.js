#!/usr/bin/env node

import concurrently from 'concurrently';

concurrently(
  [
    { command: 'cd manual/react && npm run build', name: 'react', prefixColor: 'magenta' },
    { command: 'cd manual/solid && npm run build', name: 'solid', prefixColor: 'cyan' },
    { command: 'cd manual/svelte && npm run build', name: 'svelte', prefixColor: 'yellow' },
    { command: 'cd manual/vue && npm run build', name: 'vue', prefixColor: 'green' },
    { command: 'cd manual/preact && npm run build', name: 'preact', prefixColor: 'white' },
    { command: 'cd manual/svelte5 && npm run build', name: 'svelte5', prefixColor: 'red' },
    { command: 'cd manual/vanilla && npm run build', name: 'vanilla', prefixColor: 'gray' },
  ],
  {
    prefix: 'name',
    timestampFormat: 'HH:mm:ss',
  }
);
