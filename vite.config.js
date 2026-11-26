import { defineConfig } from 'vite'

export default defineConfig({
  // This forces all paths to be relative!
  base: '', 
  build: {
    outDir: 'dist',
  }
})