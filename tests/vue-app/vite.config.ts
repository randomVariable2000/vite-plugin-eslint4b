import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslint4b from "vite-plugin-eslint4b";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslint4b()],
});
