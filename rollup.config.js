import postcss from 'rollup-plugin-postcss';
import scss from 'rollup-plugin-scss';
import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-babel-minify';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  external: ["react", "react-dom"],
  globals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  output: {
    format: 'umd',
    file: './dist/bundle.js',
    name: 'Yanime',
  },
  globals: {
    react: 'React',
  },
  plugins: [
    postcss({
      modules: false,
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    resolve(),
    commonjs(),
    minify(),
  ],
}