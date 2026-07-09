import type { NextConfig } from "next";

// Khi deploy lên GitHub Pages, site chạy dưới sub-path "/smartbiz".
// CI sẽ set NEXT_PUBLIC_BASE_PATH="/smartbiz"; local dev để trống.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Xuất site tĩnh (HTML/CSS/JS) để host trên GitHub Pages.
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    // Static export không hỗ trợ trình tối ưu ảnh mặc định.
    unoptimized: true,
  },
};

export default nextConfig;
