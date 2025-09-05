// next.config.mjs
import withPWA from "next-pwa";
import runtimeCaching from "next-pwa/cache"; // built-in default runtime caching

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: false,

    // Fully offline runtime caching
    runtimeCaching: [
      // Cache all Next.js pages
      {
        urlPattern: /^https:\/\/money-collecter-app\.vercel\.app\/.*$/,
        handler: "NetworkFirst",
        options: {
          cacheName: "pages-cache",
          expiration: { maxEntries: 100, maxAgeSeconds: 24 * 60 * 60 }, // 1 day
        },
      },
      // Cache images
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg|gif|ico)$/,
        handler: "CacheFirst",
        options: {
          cacheName: "images-cache",
          expiration: { maxEntries: 50, maxAgeSeconds: 7 * 24 * 60 * 60 }, // 7 days
        },
      },
      // Cache API calls (if you have any)
      {
        urlPattern: /^https:\/\/money-collecter-app\.vercel\.app\/api\/.*$/,
        handler: "NetworkFirst",
        options: {
          cacheName: "api-cache",
          expiration: { maxEntries: 50, maxAgeSeconds: 24 * 60 * 60 },
        },
      },
      // Default next-pwa caching
      ...runtimeCaching,
    ],
  },
};

export default withPWA(nextConfig);
