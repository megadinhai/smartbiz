import type { ContactMethod, FooterInfo, NavItem } from "@/types";

export const CONTACT_BADGE = "Liên hệ";
export const CONTACT_HEADING = "Thông tin liên hệ";
export const CONTACT_DESCRIPTION =
  "Liên hệ với chúng tôi để được tư vấn chi tiết về các dịch vụ chính xác, tối ưu cho doanh nghiệp của bạn!";

export const CONTACT_METHODS: ContactMethod[] = [
  {
    icon: "/images/icon-phone.svg",
    label: "Hotline",
    value: "19000368",
    alt: "Biểu tượng điện thoại",
  },
  {
    icon: "/images/icon-email.svg",
    label: "Email",
    value: "hotro.smartbiz@gmail.com",
    alt: "Biểu tượng email",
  },
];

/** CTA banner (section careers). */
export const CTA_HEADING = "Bắt đầu miễn phí ngay hôm nay";
export const CTA_QUOTE =
  "Tải SmartBiz, đăng nhập VNeID và khám phá các dịch vụ dành cho doanh nghiệp của bạn. Hoàn toàn miễn phí.";

/** Footer. */
export const FOOTER_INFO: FooterInfo[] = [
  {
    icon: "/images/icon-address.svg",
    label: "Địa chỉ:",
    value: "47 Phạm Văn Đồng, Mai Dịch, Cầu Giấy, Thành phố Hà Nội",
    alt: "Biểu tượng địa chỉ",
  },
  {
    icon: "/images/icon-hotline.svg",
    label: "Hotline:",
    value: "19000368",
    alt: "Biểu tượng hotline",
  },
  {
    icon: "/images/icon-mail.svg",
    label: "Email:",
    value: "hotro.smartbiz@gmail.com",
    alt: "Biểu tượng email",
  },
];

export const FOOTER_LINKS: NavItem[] = [
  { label: "Câu hỏi thường gặp", href: "#cau-hoi" },
  { label: "Điều khoản sử dụng dịch vụ", href: "#" },
  { label: "Chính sách quyền riêng tư", href: "#" },
];
