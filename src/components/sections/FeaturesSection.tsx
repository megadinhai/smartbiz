import Image from "next/image";
import { asset } from "@/lib/asset";
import { Container } from "@/components/common/Container";
import { SectionBadge } from "@/components/common/SectionBadge";
import { SectionHeading } from "@/components/common/SectionHeading";
import { FeatureCard } from "@/components/sections/FeatureCard";
import {
  FEATURES_BADGE,
  FEATURES_SUBTITLE,
  FEATURE_GROUPS,
} from "@/constants/features";

export function FeaturesSection() {
  return (
    <section id="tinh-nang" className="scroll-mt-24 bg-white py-16 lg:py-20">
      <Container>
        <div className="flex flex-col items-center gap-5 text-center">
          <SectionBadge>{FEATURES_BADGE}</SectionBadge>
          <SectionHeading className="justify-center">
            <span>SmartBiz cung cấp</span>
            <span className="text-brand"> 2 nhóm dịch vụ</span>
            <span> toàn diện</span>
          </SectionHeading>
          <p className="max-w-4xl text-base text-[#1b1b1b]">{FEATURES_SUBTITLE}</p>
        </div>

        <div className="relative mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {FEATURE_GROUPS.map((group) => (
            <FeatureCard key={group.badge} group={group} />
          ))}

          {/* Vòng tròn logo trang trí giữa 2 nhóm (desktop) */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden size-[157px] -translate-x-1/2 -translate-y-1/2 items-center justify-center lg:flex">
            <Image
              src={asset("/images/feature-center-ring.svg")}
              alt=""
              aria-hidden
              width={157}
              height={157}
              className="absolute inset-0 size-full"
            />
            <Image
              src={asset("/images/feature-center-logo.svg")}
              alt=""
              aria-hidden
              width={75}
              height={88}
              className="h-[88px] w-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
