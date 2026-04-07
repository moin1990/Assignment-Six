import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Compatible with Vite 4 + Node 16
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
});
