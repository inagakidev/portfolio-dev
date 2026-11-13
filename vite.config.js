import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'react-vendor',
              test: /node_modules[\\/](react|react-dom|scheduler)[\\/]/,
            },
            {
              name: 'gsap-vendor',
              test: /node_modules[\\/]gsap[\\/]/,
            },
            {
              name: 'i18n-vendor',
              test: /node_modules[\\/](i18next|react-i18next)[\\/]/,
            },
            {
              name: 'icons-vendor',
              test: /node_modules[\\/]react-icons[\\/]/,
            },
          ],
        },
      },
    },
  },
});
