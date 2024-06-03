import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 80,
    },
});








/* export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: '34.229.141.155', // Use o endereço IP público da sua instância EC2
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
}); */
