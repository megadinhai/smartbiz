import { cn } from "@/lib/utils";

interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
}

/** Pill badge dùng đầu mỗi section (Tính năng chính, Hướng dẫn, Bảo mật...). */
export function SectionBadge({ children, className }: SectionBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-[40px] border border-white/50 bg-gradient-to-r from-[rgba(212,100,100,0.05)] to-[rgba(224,99,99,0.05)] px-7 py-2 text-xs font-semibold text-[#c6353c]",
        className,
      )}
    >
      {children}
    </span>
  );
}
