import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "default" | "footer";
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
}

/** Logo SmartBiz = biểu tượng (mark) + chữ (wordmark). */
export function Logo({
  variant = "default",
  className,
  markClassName,
  wordmarkClassName,
}: LogoProps) {
  const isFooter = variant === "footer";
  const mark = isFooter ? "/images/logo-mark-footer.svg" : "/images/logo-mark.svg";
  const wordmark = isFooter
    ? "/images/logo-wordmark-footer.svg"
    : "/images/logo-wordmark.svg";

  return (
    <div className={cn("flex items-center gap-3 sm:gap-[19px]", className)}>
      <Image
        src={mark}
        alt="Biểu tượng SmartBiz"
        width={isFooter ? 61 : 39}
        height={isFooter ? 71 : 45}
        className={cn(
          isFooter ? "h-[52px] w-auto sm:h-[71px]" : "h-[38px] w-auto",
          markClassName,
        )}
        priority
      />
      <Image
        src={wordmark}
        alt="SmartBiz"
        width={isFooter ? 270 : 171}
        height={isFooter ? 46 : 29}
        className={cn(
          isFooter ? "h-[32px] w-auto sm:h-[46px]" : "h-[24px] w-auto sm:h-[29px]",
          wordmarkClassName,
        )}
        priority
      />
    </div>
  );
}
