/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ⛔ يتجاهل أخطاء ESLint أثناء build
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig; 
