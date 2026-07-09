import Image from "next/image";
import { AppStoreButtons } from "@/components/common/AppStoreButtons";
import { asset } from "@/lib/asset";
import { CTA_HEADING, CTA_QUOTE } from "@/constants/contact";

export function CtaSection() {
  return (
    <section aria-label={CTA_HEADING} className="relative isolate overflow-hidden">
      <Image
        src={asset("/images/careers-bg.png")}
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[rgba(65,2,2,0.85)] to-[rgba(43,16,16,0.6)]" />

      <div className="mx-auto flex max-w-[848px] flex-col items-center gap-7 px-5 py-20 text-center sm:px-8 lg:py-[130px]">
        <h2 className="text-2xl font-extrabold text-white sm:text-[32px]">{CTA_HEADING}</h2>
        <div className="flex items-center justify-center gap-4">
          <Image
            src={asset("/images/quote-open.svg")}
            alt=""
            aria-hidden
            width={37}
            height={29}
            className="hidden h-[29px] w-auto self-start sm:block"
          />
          <p className="max-w-[701px] text-lg uppercase leading-8 tracking-[0.48px] text-[#e6e6e6] sm:text-2xl">
            {CTA_QUOTE}
          </p>
          <Image
            src={asset("/images/quote-close.svg")}
            alt=""
            aria-hidden
            width={38}
            height={30}
            className="hidden h-[30px] w-auto self-end sm:block"
          />
        </div>
        <AppStoreButtons />
      </div>
    </section>
  );
}
