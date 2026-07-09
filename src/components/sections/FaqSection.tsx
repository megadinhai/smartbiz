"use client";

import Image from "next/image";
import { asset } from "@/lib/asset";
import { Container } from "@/components/common/Container";
import { SectionBadge } from "@/components/common/SectionBadge";
import { SectionHeading } from "@/components/common/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_BADGE, FAQ_HEADING, FAQ_ITEMS } from "@/constants/faq";

export function FaqSection() {
  return (
    <section
      id="cau-hoi"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#fdfdfd] py-16 lg:py-20"
    >
      {/* Vệt sáng cam mờ phía trên */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-6 -z-10 h-[46px] bg-[rgba(255,107,44,0.5)] blur-[60px]"
      />
      {/* Vector trang trí góc trái */}
      <Image
        src={asset("/images/faq-decor-left.svg")}
        alt=""
        aria-hidden
        width={248}
        height={281}
        className="pointer-events-none absolute -left-7 -top-9 -z-10 w-[248px] select-none"
      />
      {/* Vector trang trí góc phải */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[142px] right-[-70px] -z-10 flex h-[492px] w-[408px] select-none items-center justify-center"
      >
        <div className="rotate-[59.56deg]">
          <Image
            src={asset("/images/faq-decor-right.svg")}
            alt=""
            width={447}
            height={211}
            className="h-[211px] w-[447px]"
          />
        </div>
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center gap-5 text-center">
          <SectionBadge>{FAQ_BADGE}</SectionBadge>
          <SectionHeading className="justify-center">{FAQ_HEADING}</SectionHeading>
        </div>

        <Accordion
          type="single"
          collapsible
          defaultValue="faq-0"
          className="mx-auto mt-10 flex max-w-[960px] flex-col gap-6"
        >
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem
              key={item.question}
              value={`faq-${i}`}
              className="rounded-[14px] bg-white px-5 shadow-[0px_1px_3px_0px_rgba(143,143,143,0.2),0px_0px_0px_1px_#eaeaea]"
            >
              <AccordionTrigger className="items-center py-4 text-left text-base font-medium text-[#4a4e69] hover:no-underline">
                {`${i + 1}. ${item.question}`}
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-sm leading-[18px] text-[#4a4e69]">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
