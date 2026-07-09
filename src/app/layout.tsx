import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = "https://smartbiz.vn";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SmartBiz — Nền tảng số đa dịch vụ cho hộ kinh doanh & DNNVV",
    template: "%s | SmartBiz",
  },
  description:
    "SmartBiz là nền tảng số đa dịch vụ cấp quốc gia giúp hộ kinh doanh và doanh nghiệp nhỏ và vừa đăng ký kinh doanh, chữ ký số, hóa đơn điện tử — xác thực qua VNeID.",
  keywords: [
    "SmartBiz",
    "hộ kinh doanh",
    "doanh nghiệp nhỏ và vừa",
    "chữ ký số",
    "hóa đơn điện tử",
    "đăng ký kinh doanh",
    "VNeID",
  ],
  authors: [{ name: "SmartBiz" }],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteUrl,
    siteName: "SmartBiz",
    title: "SmartBiz — Nền tảng số đa dịch vụ cho hộ kinh doanh & DNNVV",
    description:
      "Đăng ký kinh doanh, chữ ký số, hóa đơn điện tử trong một ứng dụng — xác thực an toàn qua VNeID. Miễn phí trên App Store và Google Play.",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "SmartBiz" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartBiz — Nền tảng số đa dịch vụ cho hộ kinh doanh & DNNVV",
    description:
      "Đăng ký kinh doanh, chữ ký số, hóa đơn điện tử trong một ứng dụng — xác thực an toàn qua VNeID.",
    images: ["/images/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${beVietnamPro.variable} antialiased`}>
      <body className="min-h-screen bg-background font-sans text-ink">
        {children}
      </body>
    </html>
  );
}
