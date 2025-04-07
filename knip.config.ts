import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  entry: ['./public/x-viewport.js', './functions/uuid/index.ts'],
  project: ['**/*.{js,ts}'],
}

export default config;
