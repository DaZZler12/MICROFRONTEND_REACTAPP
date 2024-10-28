import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "secondApp",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.tsx",
      },
    }),
  ],
  build: {
    target: "esnext",
  },
});
