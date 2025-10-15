#!/usr/bin/env node

import concurrently from 'concurrently';
import { execSync } from 'child_process';
import { rm, cp } from 'fs/promises';
import { existsSync } from 'fs';
import { join } from 'path';

async function cleanPublicDir() {
  const publicDir = 'doc/public';
  console.log('🧹 Cleaning manual example directories in doc/public...');

  // Ensure the public directory exists
  execSync(`mkdir -p ${publicDir}`);

  const dirsToClean = ['react', 'solid', 'svelte', 'vue', 'preact', 'vanilla', 'svelte5'];

  for (const dir of dirsToClean) {
    const dirPath = join(publicDir, dir);
    if (existsSync(dirPath)) {
      await rm(dirPath, { recursive: true, force: true });
      console.log(`✅ Cleaned ${dirPath}`);
    }
  }

  console.log('✅ Manual example directories cleaned');
}

async function copyBuildOutputs() {
  console.log('📦 Copying build outputs to doc/public...');

  const copies = [
    { src: 'manual/react/dist', dest: 'doc/public/react' },
    { src: 'manual/solid/dist', dest: 'doc/public/solid' },
    { src: 'manual/svelte/dist', dest: 'doc/public/svelte' },
    { src: 'manual/vue/dist', dest: 'doc/public/vue' },
    { src: 'manual/preact/dist', dest: 'doc/public/preact' },
    { src: 'manual/vanilla/dist', dest: 'doc/public/vanilla' },
    { src: 'manual/svelte5/.svelte-kit/output/client', dest: 'doc/public/svelte5' },
  ];

  for (const { src, dest } of copies) {
    if (existsSync(src)) {
      await cp(src, dest, { recursive: true });
      console.log(`✅ Copied ${src} → ${dest}`);
    } else {
      console.warn(`⚠️  Source ${src} does not exist, skipping`);
    }
  }

  console.log('🎉 All build outputs copied to doc/public');
}

async function main() {
  try {
    // Clean public directory first
    await cleanPublicDir();

    // Build all examples concurrently
    console.log('🔨 Building all manual examples...');
    await concurrently(
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

    // Copy build outputs to doc/public
    await copyBuildOutputs();

    console.log('🎊 Build process complete! Manual examples are ready in doc/public/');
  } catch (error) {
    console.error('❌ Build process failed:', error);
    process.exit(1);
  }
}

main();
