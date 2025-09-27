import withPWA from "next-pwa";
import { join } from "path";

const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  pwa: {
    dest: "public",          // service worker and manifest go here
    register: true,
    skipWaiting: true,
    disable: false,
    // Glob patterns for precaching all static files including _next chunks
    globPatterns: [
      "**/*.{js,css,html,png,jpg,jpeg,svg,ico,json,woff,woff2,eot,ttf,otf}"
    ],
    additionalManifestEntries: [
      { url: "/", revision: null },           // src/page.js
      { url: "/customer", revision: null },   // src/customer/page.js
      { url: "/export", revision: null },     // src/export/page.js
      // add more pages if needed
    ],
    runtimeCaching: [
      {
        urlPattern: /^\/_next\/.*$/i,
        handler: "CacheFirst",
        options: {
          cacheName: "nextjs-chunks-cache",
          expiration: { maxEntries: 200, maxAgeSeconds: 30 * 24 * 60 * 60 }, // 30 days
        },
      },
      {
        urlPattern: /^\/.*$/i,
        handler: "NetworkFirst",
        options: {
          cacheName: "pages-cache",
          networkTimeoutSeconds: 5,
          expiration: { maxEntries: 50 },
        },
      },
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg|gif|ico|webp|avif)$/i,
        handler: "CacheFirst",
        options: {
          cacheName: "images-cache",
          expiration: { maxEntries: 100, maxAgeSeconds: 60 * 24 * 60 * 60 }, // 60 days
        },
      },
      {
        urlPattern: /\.(?:woff|woff2|eot|ttf|otf)$/i,
        handler: "CacheFirst",
        options: {
          cacheName: "fonts-cache",
          expiration: { maxEntries: 50, maxAgeSeconds: 365 * 24 * 60 * 60 }, // 1 year
        },
      },
    ],
  },
});

export default withPWA(nextConfig);
