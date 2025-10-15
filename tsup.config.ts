import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/preact.ts',
    'src/solid.ts',
    'src/svelte.ts',
    'src/vue.ts',
    'src/vanilla.ts',
  ],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  minify: false,
  sourcemap: true,
  external: ['preact', 'react', 'solid-js', 'svelte', 'vue'],
  outExtension: ({ format }) => ({
    js: format === 'esm' ? '.mjs' : '.js',
  }),
});
