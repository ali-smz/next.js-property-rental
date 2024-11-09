/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        pathname: "**",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        pathname: "**",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
