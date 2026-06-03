/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  async redirects() {
    return [
      {
        source: "/",
        destination: "/app",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;