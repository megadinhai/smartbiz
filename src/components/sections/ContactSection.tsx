import Image from "next/image";
import { Container } from "@/components/common/Container";
import { SectionBadge } from "@/components/common/SectionBadge";
import { SectionHeading } from "@/components/common/SectionHeading";
import {
  CONTACT_BADGE,
  CONTACT_DESCRIPTION,
  CONTACT_HEADING,
  CONTACT_METHODS,
} from "@/constants/contact";

export function ContactSection() {
  return (
    <section
      id="lien-he"
      className="scroll-mt-24 bg-gradient-to-b from-[#fdfdfd] via-[#fdfdfd] via-[76%] to-[#ffdfdf] py-16 lg:py-20"
    >
      <Container>
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-5 text-center">
            <SectionBadge>{CONTACT_BADGE}</SectionBadge>
            <SectionHeading className="justify-center">{CONTACT_HEADING}</SectionHeading>
            <p className="max-w-[476px] text-base leading-6 text-[#4a4e69]">
              {CONTACT_DESCRIPTION}
            </p>
          </div>

          <ul className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-12">
            {CONTACT_METHODS.map((method) => (
              <li
                key={method.label}
                className="flex w-[280px] flex-col items-center gap-3 text-center"
              >
                <span className="flex size-[60px] items-center justify-center rounded-full bg-[#c5403e]">
                  <Image src={method.icon} alt={method.alt} width={29} height={29} className="size-[29px]" />
                </span>
                <span className="text-sm font-semibold text-[#c5403e]">{method.label}</span>
                <span className="text-sm text-[#605d62]">{method.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
