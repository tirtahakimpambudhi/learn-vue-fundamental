import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';


const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      tailwindcss(),
  ],
    resolve: {
      alias: {
          "@": resolve(__dirname, "./src"),
          "@components": resolve(__dirname, "./src/components"),
          "@assets": resolve(__dirname, "./src/assets"),
          "@types": resolve(__dirname,"./src/types"),
          "@pages": resolve(__dirname, "./src/pages"),
          "@states": resolve(__dirname, "./src/states"),
          "@handlers": resolve(__dirname, "./src/handlers"),
          "@todolist": resolve(__dirname, "./src/features/todolist"),
          "@learn": resolve(__dirname, "./src/features/learn"),
          "@codeinaja-users": resolve(__dirname, "./src/features/codeinaja-users"),
      }
    }
})
