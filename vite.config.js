import {defineConfig} from 'vite'
import handlebars from 'vite-plugin-handlebars';
import {fileURLToPath} from "url";
import {resolve} from "path";

export default defineConfig({
  root: resolve(__dirname, 'src'),
  build: {
    outDir: resolve(__dirname, 'build'),
  },
  server: {
    port: 3000,
    strictPort: true
  },
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
    ],
  },
  plugins: [handlebars()],
})