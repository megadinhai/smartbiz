import type { FeatureGroup } from "@/types";

export const FEATURES_BADGE = "Tính năng chính";
export const FEATURES_SUBTITLE =
  "Từ thủ tục hành chính với cơ quan nhà nước đến các công cụ vận hành kinh doanh hằng ngày - SmartBiz là cửa ngõ số duy nhất bạn cần.";

/** 2 nhóm dịch vụ — heading có phần "2 nhóm dịch vụ" tô đỏ (xử lý ở component). */
export const FEATURE_GROUPS: FeatureGroup[] = [
  {
    badge: "NHÓM 1",
    icon: "/images/feature-group-1.svg",
    title: "Dịch vụ công",
    description:
      "Kết nối trực tiếp với cơ quan nhà nước thông qua định danh VNeID — không cần đến cơ quan, không nhập lại thông tin.",
    items: [
      {
        title: "Đăng ký kinh doanh",
        description:
          "Thành lập doanh nghiệp, chuyển đổi hộ kinh doanh trực tuyến qua VNeID — 100% trực tuyến, không cần đến cơ quan",
        status: "coming-soon",
      },
      {
        title: "Kết nối Cục Thuế",
        description:
          "Tra cứu nghĩa vụ thuế, nộp tờ khai, nhận thông báo từ Tổng cục Thuế",
        status: "coming-soon",
      },
      {
        title: "Bảo hiểm xã hội (BHXH)",
        description:
          "Tích hợp BHXH Việt Nam - đóng BHXH, tra cứu quyền lợi, quản lý lao động",
        status: "coming-soon",
      },
    ],
  },
  {
    badge: "NHÓM 2",
    icon: "/images/feature-group-2.svg",
    title: "Dịch vụ thương mại",
    description:
      "Bộ công cụ vận hành kinh doanh từ các nhà cung cấp đã được xác minh - tìm kiếm, đăng ký và theo dõi ngay trong app.",
    items: [
      {
        title: "Chữ ký số (CKS)",
        description:
          "Ký hồ sơ, hợp đồng, hóa đơn hợp pháp. Đăng ký CKS trong vài phút, không gặp trực tiếp CA",
        status: "available",
      },
      {
        title: "Hóa đơn điện tử",
        description:
          "Xuất hóa đơn VAT đúng quy định, kết nối trực tiếp Tổng cục Thuế. Tự động tích hợp POS",
        status: "available",
      },
      {
        title: "Quản lý bán hàng (POS)",
        description:
          "Phần mềm quản lý bán hàng, quản lý kho, đặt hàng online - thuế tích hợp tự động",
        status: "coming-soon",
      },
      {
        title: "Kế toán & Thuế",
        description:
          "Sổ sách, kế toán, nộp thuế tự động. Liên thông dữ liệu bán hàng, ngân hàng và cơ quan thuế",
        status: "coming-soon",
      },
    ],
  },
];
