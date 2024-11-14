import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-pink-600 text-orange-300 p-3 h-20 flex items-center justify-center relative">
      <div className="flex gap-10 text-2xl font-bold">
        <Link href="/">HOME</Link>
        <Link href="/about">ABOUT</Link>
        <Link href="/services">SERVICES</Link>
        <Link href="/jobs">JOBS</Link>
        <Link href="/contacts">CONTACT</Link>
      </div>
    </div>
  );
}
