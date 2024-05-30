/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    staticFolder: "/static", // Đường dẫn tới thư mục chứa tệp tĩnh
  },
  images: {
    domains: ["images.unsplash.com", "firebasestorage.googleapis.com"],
  },
};

export default nextConfig;
