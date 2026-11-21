/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // relative paths: works under any GitHub Pages sub-path
  test: { environment: "node" },
});
