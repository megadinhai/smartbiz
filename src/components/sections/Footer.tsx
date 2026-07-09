import Image from "next/image";
import { asset } from "@/lib/asset";
import { Container } from "@/components/common/Container";
import { Logo } from "@/components/common/Logo";
import { FOOTER_INFO, FOOTER_LINKS } from "@/constants/contact";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#f0f1f2] pb-10 pt-16">
      <Image
        src={asset("/images/footer-bg.png")}
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="pointer-events-none object-cover opacity-[0.08] mix-blend-darken"
      />
      <Container className="relative flex flex-col gap-5">
        {/* Card thông tin */}
        <div className="flex flex-col items-start gap-8 rounded-[20px] border border-[#adb5bd] bg-white/40 p-6 backdrop-blur-sm lg:flex-row lg:items-center lg:justify-between lg:p-10">
          <Logo variant="footer" />
          <ul className="flex w-full flex-col gap-5 lg:w-[603px]">
            {FOOTER_INFO.map((info) => (
              <li key={info.label} className="flex items-start gap-2">
                <Image
                  src={asset(info.icon)}
                  alt={info.alt}
                  width={24}
                  height={24}
                  className="mt-0.5 size-6 shrink-0"
                />
                <p className="text-base leading-6 text-ink">
                  <span className="font-normal">{info.label} </span>
                  <span className="font-semibold">{info.value}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Card liên kết */}
        <nav
          aria-label="Liên kết chân trang"
          className="rounded-[20px] border border-[#adb5bd] bg-white/40 px-6 py-5 backdrop-blur-sm sm:px-10"
        >
          <ul className="flex flex-col items-center justify-center gap-4 text-center text-base text-ink-soft sm:flex-row sm:gap-12 lg:gap-[100px]">
            {FOOTER_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-brand">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
