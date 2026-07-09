import Image from "next/image";
import { AppStoreButtons } from "@/components/common/AppStoreButtons";
import { asset } from "@/lib/asset";

const HERO_TAGLINE =
  "Nền tảng số đa dịch vụ cấp quốc gia - giúp hộ kinh doanh và doanh nghiệp nhỏ và vừa tiếp cận dịch vụ, thực hiện thủ tục pháp lý thuận tiện hơn, tiết kiệm thời gian và chi phí";

export function HeroSection() {
  return (
    <section
      aria-label="Giới thiệu SmartBiz"
      className="relative overflow-hidden bg-[linear-gradient(269deg,#c6353c_0%,#a6080b_100%)]"
    >
      {/* Vector trang trí */}
      <Image
        src={asset("/images/hero-decor-left.svg")}
        alt=""
        aria-hidden
        width={248}
        height={281}
        className="pointer-events-none absolute -left-16 -top-5 w-[248px] select-none opacity-90"
      />
      <Image
        src={asset("/images/hero-decor-right.svg")}
        alt=""
        aria-hidden
        width={653}
        height={338}
        className="pointer-events-none absolute -top-5 right-0 hidden w-[653px] select-none opacity-90 lg:block"
      />

      <div className="relative mx-auto grid max-w-[1440px] items-center gap-10 px-5 pt-16 pb-0 sm:px-8 lg:grid-cols-2 lg:gap-6 lg:px-20 lg:py-0 lg:pt-[114px]">
        {/* Nội dung */}
        <div className="flex flex-col items-center gap-10 text-center lg:max-w-[461px] lg:gap-[80px]">
          <div className="flex flex-col items-center gap-[50px]">
            <h1 className="sr-only">
              SmartBiz — Nền tảng số đa dịch vụ cho hộ kinh doanh và doanh nghiệp nhỏ và
              vừa
            </h1>
            <Image
              src={asset("/images/hero-wordmark.svg")}
              alt="SmartBiz"
              width={273}
              height={46}
              priority
              className="h-[40px] w-auto sm:h-[46px]"
            />
            <p className="text-lg leading-7 text-white sm:text-xl">{HERO_TAGLINE}</p>
          </div>
          <AppStoreButtons />
        </div>

        {/* Mockup điện thoại */}
        <div className="relative mx-auto w-full max-w-[670px] self-end lg:mx-0 lg:ml-auto">
          <Image
            src={asset("/images/hero-phone.png")}
            alt="Giao diện ứng dụng SmartBiz"
            width={670}
            height={490}
            priority
            className="h-auto w-full select-none"
          />
        </div>
      </div>
    </section>
  );
}
