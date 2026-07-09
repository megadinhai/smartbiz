import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { asset } from "@/lib/asset";
import { cn } from "@/lib/utils";
import type { FeatureGroup, FeatureStatus } from "@/types";

const STATUS_LABEL: Record<FeatureStatus, string> = {
  available: "Có sẵn",
  "coming-soon": "Sắp ra mắt",
};

function StatusBadge({ status }: { status: FeatureStatus }) {
  return (
    <Badge
      className={cn(
        "shrink-0 rounded-full border-0 px-2.5 py-0.5 text-xs font-medium",
        status === "available"
          ? "bg-success/10 text-success"
          : "bg-neutral-100 text-neutral-500",
      )}
    >
      {STATUS_LABEL[status]}
    </Badge>
  );
}

export function FeatureCard({ group }: { group: FeatureGroup }) {
  return (
    <article className="flex flex-col rounded-3xl border border-hairline bg-white p-6 shadow-sm">
      {/* Header nhóm */}
      <div className="flex items-start gap-5">
        <div className="flex size-[60px] shrink-0 items-center justify-center rounded-full border-4 border-[#ffeaea] bg-brand">
          <Image src={asset(group.icon)} alt="" aria-hidden width={36} height={36} className="size-[30px]" />
        </div>
        <div className="flex flex-col gap-2">
          <span className="inline-flex w-fit items-center rounded-[40px] border border-white/50 bg-gradient-to-r from-[rgba(212,100,100,0.05)] to-[rgba(224,99,99,0.05)] px-3 py-1.5 text-xs font-semibold text-[#c6353c]">
            {group.badge}
          </span>
          <h3 className="text-xl font-bold text-ink">{group.title}</h3>
          <p className="text-sm leading-normal text-ink-muted">{group.description}</p>
        </div>
      </div>

      <hr className="my-5 border-hairline" />

      {/* Danh sách dịch vụ */}
      <ul className="flex flex-col gap-5">
        {group.items.map((item) => (
          <li key={item.title} className="flex items-start gap-3">
            <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-brand/5">
              <Image
                src={asset("/images/feature-row-icon.svg")}
                alt=""
                aria-hidden
                width={16}
                height={16}
                className="size-3.5"
              />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <div className="flex items-start justify-between gap-3">
                <h4 className="text-sm font-semibold text-[#1a2340]">{item.title}</h4>
                <StatusBadge status={item.status} />
              </div>
              <p className="text-xs leading-[18px] text-ink-muted">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
}
