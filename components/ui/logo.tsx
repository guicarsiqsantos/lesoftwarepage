import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        alt="Lesoftware Logo"
        width={160}
        height={50}
        quality={100}
        priority
      />
    </Link>
  );
}
