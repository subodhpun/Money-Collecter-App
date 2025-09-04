// next.config.mjs
import withPWA from "next-pwa";

const nextConfig = {
  reactStrictMode: true, // ✅ Next.js option
  swcMinify: true,       // ✅ Next.js option

  pwa: {
    dest: "public",       // ✅ required: where sw.js is generated
    register: true,       // ✅ auto-register service worker
    skipWaiting: true,    // ✅ immediately take control
    disable: false, // disables in dev
  },
};

export default withPWA(nextConfig);
