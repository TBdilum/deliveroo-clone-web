import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  define: {
    "import.meta.env.PROD": JSON.stringify(
      process.env.NODE_ENV === "production",
    ),
  },
  esbuild: {
    drop: process.env.NODE_ENV === "production" ? ["console", "debugger"] : [],
  },
  server: {
    allowedHosts: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000", // Backend URL
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""), // Optional rewrite
      },
    },
  },
});
