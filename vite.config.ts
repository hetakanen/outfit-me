import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { terser } from 'rollup-plugin-terser';

export default defineConfig({
  plugins: [
    react(),
    terser() // minify the output
  ],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
    rollupOptions: {
      input: "./src/client/main.tsx",
      output: {
        dir: './dist',
        format: 'es'
      }
    }
  }
});
