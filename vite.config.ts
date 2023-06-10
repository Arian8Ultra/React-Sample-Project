import { defineConfig, resolveBaseUrl } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    manifest: true,
    minify: 'terser',
    emptyOutDir: true,
    cssCodeSplit: true,
    sourcemap: true,
    terserOptions: {
      sourceMap:true,
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log'],
        dead_code: true,
        unused: true,
        loops: true,
      },
    },
    rollupOptions: {
      watch: {
        include: ['src/**', 'node_modules/**'],
        exclude: ['node_modules/**/node_modules/**']
      }
    },
  },

})
