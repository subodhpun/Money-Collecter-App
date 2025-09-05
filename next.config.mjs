// next.config.mjs
import withPWA from "next-pwa";
import runtimeCaching from "next-pwa/cache.js";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: false, // keep service worker active
    runtimeCaching: [
      // Pages & routes
      {
        urlPattern: /^https:\/\/money-collecter-app\.vercel\.app\/.*$/,
        handler: "NetworkFirst",
        options: {
          cacheName: "pages-cache",
          expiration: { maxEntries: 100, maxAgeSeconds: 24 * 60 * 60 },
        },
      },
      // Images & icons
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg|gif|ico)$/,
        handler: "CacheFirst",
        options: {
          cacheName: "images-cache",
          expiration: { maxEntries: 50, maxAgeSeconds: 7 * 24 * 60 * 60 },
        },
      },
      // API calls
      {
        urlPattern: /^https:\/\/money-collecter-app\.vercel\.app\/api\/.*$/,
        handler: "NetworkFirst",
        options: {
          cacheName: "api-cache",
          expiration: { maxEntries: 50, maxAgeSeconds: 24 * 60 * 60 },
        },
      },
      // Exclude _next/* dynamic files from precache
      ...runtimeCaching.map(rule => {
        if (rule.urlPattern.source.includes("_next")) {
          return { ...rule, handler: "NetworkFirst" }; // do NOT precache _next build files
        }
        return rule;
      }),
    ],
  },
};

export default withPWA(nextConfig);
