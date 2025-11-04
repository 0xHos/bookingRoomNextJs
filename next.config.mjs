/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ Disable ESLint during builds
  },
  typescript: {
    ignoreBuildErrors: true, // ✅ Ignore TypeScript errors during build
  },
};

export default nextConfig;
