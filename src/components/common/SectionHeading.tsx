import Image from "next/image";
import { asset } from "@/lib/asset";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

/** Tiêu đề section = biểu tượng SmartBiz + <h2> (Bold 32px). */
export function SectionHeading({ children, id, className }: SectionHeadingProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <Image
        src={asset("/images/logo-mark.svg")}
        alt=""
        aria-hidden
        width={39}
        height={45}
        className="h-[36px] w-auto shrink-0 sm:h-[45px]"
      />
      <h2
        id={id}
        className="text-2xl font-bold leading-[1.6] text-[#1a1a2e] sm:text-[32px]"
      >
        {children}
      </h2>
    </div>
  );
}
