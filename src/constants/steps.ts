import type { Step } from "@/types";

export const STEPS_BADGE = "Hướng dẫn";
export const STEPS_SUBTITLE =
  "Từ tải app đến sử dụng dịch vụ đầu tiên - không quá 10 phút.";

export const STEPS: Step[] = [
  {
    number: 1,
    icon: "/images/step-1.png",
    title: "Tải ứng dụng",
    description:
      "Miễn phí trên App Store và Google Play. Không yêu cầu đăng ký trước.",
  },
  {
    number: 2,
    icon: "/images/step-2.png",
    title: "Đăng nhập VNeID",
    description: "Xác thực an toàn bằng định danh quốc gia mức 2",
  },
  {
    number: 3,
    icon: "/images/step-3.png",
    title: "Chọn dịch vụ",
    description: "Duyệt danh mục, xem thông tin chi tiết và gửi yêu cầu",
  },
  {
    number: 4,
    icon: "/images/step-4.png",
    title: "Đối tác liên hệ",
    description: "Nhà cung cấp liên hệ bạn trong 72h để kích hoạt dịch vụ",
  },
];
