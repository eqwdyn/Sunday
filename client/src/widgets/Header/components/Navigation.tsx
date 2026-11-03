"use client";

import { AnimatedLink } from "@shared/ui/AnimatedLink";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatedLink isActive={pathname === "/"} href="/">
        Меню и доставка
      </AnimatedLink>
      <AnimatedLink isActive={pathname === "/about"} href="/about">
        О нас
      </AnimatedLink>
    </>
  );
};
