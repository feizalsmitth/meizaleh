import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configure Vite for GitHub Pages deployment
export default defineConfig({
  plugins: [react()],
  base: '/meizaleh/', // Set the base path to the repository name
  build: {
    outDir: 'docs', // Output the built files to the 'docs' folder
    emptyOutDir: true, // Clear the 'docs' folder before building
  },
});