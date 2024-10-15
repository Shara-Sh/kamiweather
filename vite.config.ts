import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: false,

      manifest: {
        name: "KamiWeather",
        short_name: "KamiWeather",
        description:
          "KamiWeather is a weather forcasting app that provides real-time weather data forecasts.",
        theme_color: "#51A3F5",
        icons: [
          {
            src: "manifest-icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "manifest-icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },

      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },

      devOptions: {
        enabled: false,
        navigateFallback: "index.html",
        suppressWarnings: true,
        type: "module",
      },
    }),
    ,
    react(),
  ],
  server: {
    host: "0.0.0.0",
  },
});
