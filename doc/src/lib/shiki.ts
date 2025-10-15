// Shiki highlighter singleton
import { createHighlighter } from 'shiki';

let highlighter: any = null;

export async function getHighlighter() {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: ['github-light', 'github-dark'],
      langs: [
        'javascript',
        'typescript',
        'jsx',
        'tsx',
        'html',
        'css',
        'json',
        'bash',
        'shell',
        'python',
        'java',
        'cpp',
        'c',
        'go',
        'rust',
        'php',
        'ruby',
        'swift',
        'kotlin',
        'dart',
        'scala',
        'sql',
        'yaml',
        'xml',
        'markdown',
        'dockerfile',
        'makefile',
        'vue',
        'svelte',
      ],
    });
  }
  return highlighter;
}
