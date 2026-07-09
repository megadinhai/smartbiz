import type { FaqItem } from "@/types";

export const FAQ_BADGE = "Câu hỏi";
export const FAQ_HEADING = "Những câu hỏi thường gặp";

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "SmartBiz là gì và dành cho ai?",
    answer:
      "SmartBiz là nền tảng dịch vụ số quốc gia dành cho hộ kinh doanh và doanh nghiệp vừa và nhỏ (SME) tại Việt Nam. Người dùng có thể tra cứu thông tin, đăng ký kinh doanh, và tiếp cận các dịch vụ vận hành như chữ ký số, hóa đơn điện tử — tất cả trong một ứng dụng, xác thực qua VNeID.",
  },
  {
    question: "Tôi cần chuẩn bị gì để đăng ký sử dụng SmartBiz?",
    answer:
      "Chỉ cần tài khoản VNeID đã xác thực. Hệ thống tự động lấy thông tin định danh, không cần nhập lại giấy tờ thủ công. Nếu đã có đăng ký kinh doanh, thông tin doanh nghiệp cũng được liên kết tự động.",
  },
  {
    question: "Sàn dịch vụ trên SmartBiz hoạt động như thế nào?",
    answer:
      "SmartBiz hoạt động theo mô hình Lead Aggregator — kết nối hộ kinh doanh với các nhà cung cấp dịch vụ uy tín (CMC CA, Sapo...). Người dùng gửi yêu cầu tư vấn, nhà cung cấp liên hệ lại trực tiếp. Giai đoạn 1 chưa xử lý thanh toán trong app.",
  },
  {
    question: "Tôi chưa có đăng ký kinh doanh, có dùng được SmartBiz không?",
    answer:
      "Có. SmartBiz hỗ trợ 3 trạng thái người dùng: chưa đăng ký kinh doanh, đã đăng ký nhưng chưa có dịch vụ, và đã đăng ký có dịch vụ. Mỗi trạng thái hiển thị nội dung và tính năng phù hợp riêng.",
  },
  {
    question: "Dữ liệu và thông tin doanh nghiệp của tôi có an toàn không?",
    answer:
      "SmartBiz được phát triển dưới sự bảo trợ của C06 (Bộ Công an), xác thực danh tính qua hệ thống VNeID quốc gia. Toàn bộ dữ liệu được quản lý theo tiêu chuẩn bảo mật của Chính phủ Việt Nam.",
  },
];
