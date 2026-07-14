"use client";

import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="relative inline-block h-[50px] w-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
      aria-label="Lesoftware — página inicial"
    >
      <Image
        src="/logo-black.png"
        alt="Lesoftware"
        width={160}
        height={50}
        quality={100}
        priority
        className="object-contain dark:hidden"
      />
      <Image
        src="/logo.png"
        alt=""
        width={160}
        height={50}
        quality={100}
        priority
        className="hidden object-contain dark:block"
        aria-hidden
      />
    </Link>
  );
}
