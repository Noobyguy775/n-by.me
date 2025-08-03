'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { JSX } from 'react';

export default function Navbar() {
  const path = usePathname();
  const segments = path.split('/');
  const returnPath: Array<JSX.Element> = [];
  for (const [, b] of segments.entries()) {
    if (b) {
      const href = '/' + segments.slice(1, segments.indexOf(b) + 1).join('/');
      returnPath.push(
        <Link key={href} href={href}>
          {' / '}
          {b}
        </Link>
      );
    }
  }
  return (
    <nav className="bg-background-950/80 sticky top-0 mb-2 flex h-15 justify-between px-4">
      <div id="nav-area" className="flex items-center gap-2 justify-self-start">
        <div>
          <Link href="/">
            <Image src="/files/icon.png" alt="icon" width={48} height={48} />
          </Link>
        </div>
        <div className="text-lg">
          <Link href="/" id="nooby" className="font-semibold">
            n<span id="emdash">&mdash;&mdash;</span>
            <span id="oo">oo</span>by
          </Link>
          {returnPath}
        </div>
      </div>
      <div id="nav-links" className="flex items-center gap-5 justify-self-end">
        <Link href="/r/github">
          <Image
            src="/files/logos/github.svg"
            alt="github profile link"
            width={32}
            height={32}
            className="spin-image"
          />
        </Link>
        <Link href="/r/roblox">
          <Image
            src="/files/logos/roblox.svg"
            alt="roblox profile link"
            width={32}
            height={32}
            className="spin-image"
          />
        </Link>
        <Link href="/r/discord">
          <Image
            src="/files/logos/discord.svg"
            alt="discord profile link"
            width={32}
            height={32}
            className="spin-image"
          />
        </Link>
      </div>
    </nav>
  );
}
