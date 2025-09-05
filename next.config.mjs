// next.config.mjs
import withPWA from "next-pwa";
import runtimeCaching from "next-pwa/cache.js"; // ✅ updated

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: false,
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/money-collecter-app\.vercel\.app\/.*$/,
        handler: "NetworkFirst",
        options: {
          cacheName: "pages-cache",
          expiration: { maxEntries: 100, maxAgeSeconds: 24 * 60 * 60 },
        },
      },
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg|gif|ico)$/,
        handler: "CacheFirst",
        options: {
          cacheName: "images-cache",
          expiration: { maxEntries: 50, maxAgeSeconds: 7 * 24 * 60 * 60 },
        },
      },
      {
        urlPattern: /^https:\/\/money-collecter-app\.vercel\.app\/api\/.*$/,
        handler: "NetworkFirst",
        options: {
          cacheName: "api-cache",
          expiration: { maxEntries: 50, maxAgeSeconds: 24 * 60 * 60 },
        },
      },
      ...runtimeCaching,
    ],
  },
};

export default withPWA(nextConfig);
