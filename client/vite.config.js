
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/FSD-Contract_Farming_Management_System/',
  server: {
    port: 5173,
  },
});
