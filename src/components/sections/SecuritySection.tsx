import Image from "next/image";
import { asset } from "@/lib/asset";
import { Container } from "@/components/common/Container";
import { SectionBadge } from "@/components/common/SectionBadge";
import { SectionHeading } from "@/components/common/SectionHeading";
import {
  SECURITY_BADGE,
  SECURITY_DESCRIPTION,
  SECURITY_HEADING,
  SECURITY_ITEMS,
} from "@/constants/security";

export function SecuritySection() {
  return (
    <section id="bao-mat" className="scroll-mt-24 bg-[#fdfdfd] py-16 lg:py-20">
      <Container>
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-10">
          {/* Cột trái: nội dung */}
          <div className="flex flex-1 flex-col items-start gap-6 border-l-2 border-brand pl-6 lg:pl-8">
            <SectionBadge>{SECURITY_BADGE}</SectionBadge>
            <div className="flex flex-col gap-2">
              <SectionHeading>{SECURITY_HEADING}</SectionHeading>
              <p className="max-w-[566px] text-base leading-6 text-[#4a4e69]">
                {SECURITY_DESCRIPTION}
              </p>
            </div>

            <ul className="flex max-w-[388px] flex-col gap-5">
              {SECURITY_ITEMS.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[rgba(255,126,126,0.2)]">
                    <span className="size-2 rounded-full bg-gradient-to-b from-[#d71c1d] to-[#710f0f]" />
                  </span>
                  <div className="flex flex-col">
                    <h3 className="text-sm font-medium text-[#364153]">{item.title}</h3>
                    <p className="text-xs leading-[18px] text-[#4a4e69]">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Cột phải: ảnh minh họa */}
          <div className="w-full max-w-[542px] shrink-0 overflow-hidden rounded-3xl border-[6px] border-[rgba(225,235,243,0.8)] bg-[#adb5bd]">
            <Image
              src={asset("/images/security-app.png")}
              alt="Giao diện bảo mật của ứng dụng SmartBiz"
              width={542}
              height={436}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
