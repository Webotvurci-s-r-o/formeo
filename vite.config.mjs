import { resolve } from 'path'
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'src/demo',
          dest: '..'
        }
      ]
    })
  ],
  build: {
    minify: false,
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/js/index.js'),
      name: 'formeo',
      fileName: 'formeo',
      formats: ['es']
    },
    rollupOptions: {
      output: {
        assetFileNames: "formeo.[ext]",
      },
    },
  },
})
