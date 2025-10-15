#!/usr/bin/env node

import concurrently from 'concurrently';

concurrently(
  [
    { command: 'tsup --watch', name: 'tsup', prefixColor: 'blue' },
    // { command: 'cd manual/react && npm run dev', name: 'react', prefixColor: 'magenta' },
    // { command: 'cd manual/solid && npm run dev', name: 'solid', prefixColor: 'cyan' },
    // { command: 'cd manual/svelte && npm run dev', name: 'svelte', prefixColor: 'yellow' },
    // { command: 'cd manual/vue && npm run dev', name: 'vue', prefixColor: 'green' },
    // { command: 'cd manual/preact && npm run dev', name: 'preact', prefixColor: 'white' },
    // { command: 'cd manual/svelte5 && npm run dev', name: 'svelte5', prefixColor: 'red' },
    // { command: 'cd manual/vanilla && npm run dev', name: 'vanilla', prefixColor: 'gray' },
    { command: 'cd doc && npm run dev', name: 'doc', prefixColor: 'bgBlack' },
  ],
  {
    killOthersOn: ['failure', 'success'],
    restartTries: 1,
    prefix: 'name',
    timestampFormat: 'HH:mm:ss',
  }
);
