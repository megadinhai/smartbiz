import type { SecurityItem } from "@/types";

export const SECURITY_BADGE = "Bảo mật";
export const SECURITY_HEADING = "An toàn cấp Nhà nước";
export const SECURITY_DESCRIPTION =
  "SmartBiz tuân thủ các tiêu chuẩn bảo mật cao nhất theo quy định pháp luật Việt Nam, đảm bảo thông tin doanh nghiệp được bảo vệ toàn diện.";

export const SECURITY_ITEMS: SecurityItem[] = [
  {
    title: "Xác thực VNeID mức 2",
    description: "Định danh sinh trắc học, không thể giả mạo danh tính",
  },
  {
    title: "Mã hóa dữ liệu",
    description: "Mã hóa cho dữ liệu nhạy cảm",
  },
  {
    title: "ATTT cấp độ 3",
    description: "Theo Nghị định 85/2016/NĐ-CP về an toàn thông tin",
  },
  {
    title: "Luật BVDLCN 2025",
    description: "Tuân thủ đầy đủ quyền chủ thể dữ liệu, consent log minh bạch",
  },
];
