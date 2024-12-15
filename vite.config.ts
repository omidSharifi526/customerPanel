import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '192.168.43.154',
    port: 5173, // یا هر پورتی که ترجیح می‌دهید
  }
  ,

  plugins: [react()],
});
