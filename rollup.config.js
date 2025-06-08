import typescript from '@rollup/plugin-typescript';
import { builtinModules } from 'module';

export default {
  input: 'src/main.ts',
  output: {
    file: 'dist/main.js',
    format: 'cjs',
    sourcemap: false,
  },
  external: [
    'obsidian',
    ...builtinModules,
    ...builtinModules.map(m => `node:${m}`)
  ],
  plugins: [
    typescript({ tsconfig: './tsconfig.json' })
  ],
};
