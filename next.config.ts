import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "https://www.google.com",
      "res.cloudinary.com",
      "utfs.io",
    ],
  },
  missingSuspenseWithCSRBailout: false,
};

export default nextConfig;
