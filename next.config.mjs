/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emit a minimal, self-contained server build for small Docker images.
  output: 'standalone',
};
export default nextConfig;
