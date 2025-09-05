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
    disable: false,
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
      // Safely handle next-pwa default runtimeCaching
      ...runtimeCaching.map(rule => {
        if (rule.urlPattern instanceof RegExp && rule.urlPattern.source.includes("_next")) {
          // _next/* dynamic files should use NetworkFirst
          return { ...rule, handler: "NetworkFirst" };
        }
        return rule;
      }),
    ],
  },
};

export default withPWA(nextConfig);
