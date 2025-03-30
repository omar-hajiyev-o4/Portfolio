export default {
  base: '/',
  build: {
    outDir: '../dist',
    assetsDir: 'static',
    rollupOptions: {
      output: {
        assetFileNames: 'static/[name].[hash][extname]',
        entryFileNames: 'static/js/[name].[hash].js'
      }
    }
  }
}