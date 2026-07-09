import Image from "next/image";
import { Fragment } from "react";
import { asset } from "@/lib/asset";
import { SectionBadge } from "@/components/common/SectionBadge";
import { SectionHeading } from "@/components/common/SectionHeading";
import { STEPS, STEPS_BADGE, STEPS_SUBTITLE } from "@/constants/steps";

export function StepsSection() {
  return (
    <section id="huong-dan" className="scroll-mt-24 bg-[#fdfdfd] py-16 lg:py-20">
      <div className="flex flex-col items-center gap-5 px-5 text-center sm:px-8">
        <SectionBadge>{STEPS_BADGE}</SectionBadge>
        <SectionHeading className="justify-center">
          <span>Bắt đầu chỉ với </span>
          <span className="text-brand">4 bước</span>
        </SectionHeading>
        <p className="text-base text-[#1b1b1b]">{STEPS_SUBTITLE}</p>
      </div>

      <div className="mt-8 w-full overflow-hidden bg-[#971011] px-6 py-12 sm:px-12 lg:px-20 lg:py-[60px]">
        <ol className="mx-auto flex max-w-[1280px] flex-col items-stretch gap-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:flex lg:flex-row lg:items-start lg:justify-between lg:gap-0">
          {STEPS.map((step, i) => (
            <Fragment key={step.number}>
              <li className="flex flex-col items-center gap-3 text-center lg:w-[238px]">
                <span className="flex size-12 items-center justify-center rounded-3xl border-2 border-[#dbab00] bg-[#f3c521] text-xl font-bold text-[#242424]">
                  {step.number}
                </span>
                <Image
                  src={asset(step.icon)}
                  alt=""
                  aria-hidden
                  width={50}
                  height={50}
                  className="size-[50px] object-contain"
                />
                <p className="text-base font-medium text-white">{step.title}</p>
                <p className="text-xs leading-[18px] text-[#e9ecef]">
                  {step.description}
                </p>
              </li>
              {i < STEPS.length - 1 && (
                <li
                  aria-hidden
                  className="hidden h-[150px] w-px shrink-0 self-center bg-white/25 lg:block"
                />
              )}
            </Fragment>
          ))}
        </ol>
      </div>
    </section>
  );
}
