export default {
  base: '/',
  build: {
    assetsDir: 'static',
    rollupOptions: {
      output: {
        assetFileNames: 'static/[name].[hash][extname]',
        entryFileNames: 'static/[name].[hash].js'
      }
    }
  }
}