import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        alt="Lesoftware Logo"
        width={140}
        height={30}
        quality={100}
        priority
      />
    </Link>
  );
}
