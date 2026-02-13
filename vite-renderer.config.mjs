import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    minify: true,
    sourcemap: false,
    lib: {
      entry: resolve(__dirname, 'src/js/index-renderer.js'),
      name: 'formeo-renderer',
      fileName: 'formeo-renderer',
      formats: ['umd']
    },
    rollupOptions: {
      output: {
        dir: 'distRenderer',
        assetFileNames: "formeo-renderer.[ext]",
      },
    },
  },
})
