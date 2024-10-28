import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      remotes: {
        firstApp:
          process.env.VITE_FIRST_APP_URL ||
          "http://localhost:7001/assets/remoteEntry.js",
        secondApp:
          process.env.VITE_SECOND_APP_URL ||
          "http://localhost:7002/assets/remoteEntry.js",
      },
    }),
  ],
  build: {
    target: "esnext",
  },
});
