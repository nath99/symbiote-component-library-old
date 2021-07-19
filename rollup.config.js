import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

import font from "rollup-plugin-font";
import postcss from "rollup-plugin-postcss";
import { terser } from 'rollup-plugin-terser';
import { getFiles } from './scripts/buildUtils';

const extensions = ['.js', '.ts', '.jsx', '.tsx'],
      ignoredExtensions = ['.test.js', '.test.ts', '.test.jsx', '.test.tsx'];

export default {
  input: [
    './src/index.ts',
    ...getFiles('./src/Components', extensions, ignoredExtensions),
  ],
  output: {
    dir: 'dist',
    format: 'esm',
    preserveModules: true,
    preserveModulesRoot: 'src',
    sourcemap: true,
    assetFileNames: "assets/[name].[hash][extname]"
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist',
    }),
    postcss(),
    font({
      "svg":"./node_modules/line-awesome/dist/line-awesome/fonts/la-regular-400.svg",
      "css":{
				"name":"line-awesome",
				"include":["node_modules/line-awesome/dist/line-awesome/css/line-awesome.css"],
				"prefix":"la-",
				"common":"la"
			}
    }),
    terser(),
  ],
  external: ['react', 'react-dom'],
};