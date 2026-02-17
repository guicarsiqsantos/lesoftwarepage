"use client";

import Image from "next/image";

export function Logo() {
  return (
    <a href="/" className="relative inline-block h-[50px] w-40">
      {/* Tema claro: logo preta */}
      <Image
        src="/logo-black.png"
        alt="Lesoftware Logo"
        width={160}
        height={50}
        quality={100}
        priority
        className="object-contain dark:hidden"
      />
      {/* Tema escuro: logo branca */}
      <Image
        src="/logo.png"
        alt="Lesoftware Logo"
        width={160}
        height={50}
        quality={100}
        priority
        className="hidden object-contain dark:block"
      />
    </a>
  );
}
