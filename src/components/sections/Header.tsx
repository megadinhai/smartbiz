"use client";

import { useState } from "react";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { NAV_ITEMS, HEADER_HOTLINE } from "@/constants/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="relative flex items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-20 lg:py-5">
        <a href="#" aria-label="Trang chủ SmartBiz" className="shrink-0">
          <Logo />
        </a>

        {/* Menu desktop (căn giữa, chừa chỗ cho tab đỏ góc phải) */}
        <nav aria-label="Điều hướng chính" className="hidden lg:mx-auto lg:block">
          <ul className="flex items-center gap-6 xl:gap-[60px]">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full p-2 text-base font-bold text-[#4d4e52] transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Chừa chỗ cho tab đỏ (desktop) để menu không bị che */}
        <div aria-hidden className="hidden lg:block lg:w-[270px] lg:shrink-0" />

        {/* Tab đỏ góc phải: chọn ngôn ngữ + hotline (desktop) */}
        <div className="absolute right-0 top-0 hidden rounded-bl-[40px] bg-gradient-to-r from-[#ac1417] to-[#d6171a] px-10 py-1.5 lg:block">
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="flex items-center gap-2 rounded-full p-2 text-xs font-bold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Globe className="size-4" aria-hidden />
              VN
              <ChevronDown className="size-4" aria-hidden />
            </button>
            <span className="flex h-8 items-center rounded-full bg-white px-4 text-sm font-medium text-[#272626]">
              {HEADER_HOTLINE}
            </span>
          </div>
        </div>

        {/* Nút mở menu mobile */}
        <button
          type="button"
          className="rounded-md p-2 text-[#4d4e52] lg:hidden"
          aria-label={open ? "Đóng menu" : "Mở menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Menu mobile xổ xuống */}
      <div
        className={cn(
          "overflow-hidden border-t border-hairline bg-white transition-[max-height] duration-300 lg:hidden",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <nav aria-label="Điều hướng chính (mobile)" className="px-5 py-2 sm:px-8">
          <ul className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-bold text-[#4d4e52] hover:text-brand"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="py-3 text-sm font-medium text-ink-soft">{HEADER_HOTLINE}</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
