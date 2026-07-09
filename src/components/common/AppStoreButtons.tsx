import Image from "next/image";
import { cn } from "@/lib/utils";

interface StoreButton {
  href: string;
  icon: string;
  iconAlt: string;
  width: number;
  height: number;
  caption: string;
  name: string;
}

const STORE_BUTTONS: StoreButton[] = [
  {
    href: "#",
    icon: "/images/apple.png",
    iconAlt: "Apple App Store",
    width: 39,
    height: 35,
    caption: "Tải về trên",
    name: "App Store",
  },
  {
    href: "#",
    icon: "/images/googleplay.png",
    iconAlt: "Google Play",
    width: 36,
    height: 35,
    caption: "Tải về trên",
    name: "Google Play",
  },
];

interface AppStoreButtonsProps {
  className?: string;
}

/** Cặp nút "Tải về trên App Store / Google Play" — dùng ở Hero và CTA. */
export function AppStoreButtons({ className }: AppStoreButtonsProps) {
  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-3", className)}>
      {STORE_BUTTONS.map((btn) => (
        <a
          key={btn.name}
          href={btn.href}
          className="flex h-[55px] items-center gap-[10px] rounded-xl border border-white/60 bg-white px-[19px] py-[11px] transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <Image
            src={btn.icon}
            alt={btn.iconAlt}
            width={btn.width}
            height={btn.height}
            className="h-[35px] w-auto object-contain"
          />
          <span className="flex flex-col items-start">
            <span className="text-sm leading-none text-ink-muted">{btn.caption}</span>
            <span className="text-lg font-semibold leading-tight text-[#343a40]">
              {btn.name}
            </span>
          </span>
        </a>
      ))}
    </div>
  );
}
