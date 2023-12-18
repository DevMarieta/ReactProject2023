import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: {
      key: "./amam-privateKey.key",
      cert: "./amam.crt",
    },
  },
  plugins: [react()],
});
