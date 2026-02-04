import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/Javascript-ramverk-React-techReq/' : '/',
  optimizeDeps: {
    exclude: ['@digi/arbetsformedlingen'],
  },
  plugins: [react()],
}));
