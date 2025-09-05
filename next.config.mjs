// next.config.mjs
import withPWA from "next-pwa";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: false,

    // fallback page when route not cached
    fallbacks: {
      document: "/offline.html",
    },

    // Precache main pages for instant offline access
    additionalManifestEntries: [
      { url: "/", revision: "1" },
      { url: "/customers", revision: "1" },
      // Add other pages here if needed
    ],

    runtimeCaching: [
      // Cache Next.js build files (_next/*)
      {
        urlPattern: /^\/_next\/.*$/i,
        handler: "CacheFirst",
        options: {
          cacheName: "nextjs-cache",
          expiration: { maxEntries: 100, maxAgeSeconds: 7 * 24 * 60 * 60 },
        },
      },

      // Cache all app pages for offline
      {
        urlPattern: /^\/.*$/i,
        handler: "CacheFirst", // ensures pages load from cache instantly
        options: {
          cacheName: "pages-cache",
          expiration: { maxEntries: 100, maxAgeSeconds: 30 * 24 * 60 * 60 }, // 30 days
        },
      },

      // Cache images
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg|gif|ico)$/i,
        handler: "CacheFirst",
        options: {
          cacheName: "images-cache",
          expiration: { maxEntries: 50, maxAgeSeconds: 30 * 24 * 60 * 60 },
        },
      },
    ],
  },
};

export default withPWA(nextConfig);
