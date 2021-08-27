import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import importString from 'vite-plugin-string'
import importToCDN, { autoComplete } from 'vite-plugin-cdn-import'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    importToCDN({
      modules: [
        autoComplete('react'),
        autoComplete('react-dom'),
        {
          name: '@babel/standalone',
          var: 'Babel',
          path: `babel.min.js`,
        }
      ],
    }),
    reactRefresh(),
    importString({
      include: ['src/**/*.react'],
      compress: false,
    }),
  ],
})
