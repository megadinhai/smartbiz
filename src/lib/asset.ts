/**
 * Thêm base path (vd. "/smartbiz" khi deploy GitHub Pages) vào đường dẫn ảnh tĩnh.
 *
 * Ở phiên bản Next này, `next/image` KHÔNG tự động thêm `basePath` vào `src`,
 * nên mọi ảnh trong /public phải dùng helper này.
 * Local dev: NEXT_PUBLIC_BASE_PATH rỗng → trả về nguyên đường dẫn.
 */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}
