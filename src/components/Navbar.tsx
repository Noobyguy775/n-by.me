"use client"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { JSX } from "react";

export default function Navbar() {
    const path = usePathname();
    const segments = path.split("/");
    const returnPath: Array<JSX.Element> = [];
    for (const [, b] of segments.entries()) {
        if (b) {
            const href = "/" + segments.slice(1, segments.indexOf(b) + 1).join("/");
            returnPath.push(<Link key={href} href={href}>{" / "}{b}</Link>);
        }
    }
    return (
        <nav className="h-15 bg-background-950/80 flex justify-between px-4 sticky top-0 mb-2">
            <div id="nav-area" className="flex justify-self-start items-center gap-2">
                <div>
                    <Link href="/">
                        <Image
                            src="/files/icon.png"
                            alt="icon"
                            width={48}
                            height={48}
                        />
                    </Link>
                </div>
                <div className="text-lg">
                    <Link href="/" id="nooby" className="font-semibold">n<span id="emdash">&mdash;&mdash;</span><span id="oo">oo</span>by</Link>
                    {returnPath}
                </div>
            </div>
            <div id="nav-links" className="flex justify-self-end items-center gap-5">
                <Link href="/r/github">
                <Image 
                    src="/files/logos/github.svg"
                    alt="github profile link"
                    width={32}
                    height={32}
                /></Link>
                <Link href="/r/roblox"><Image
                        src="/files/logos/roblox.svg"
                        alt="roblox profile link"
                        width={32}
                        height={32}
                /></Link>
                <Link href="/r/discord"><Image
                    src="/files/logos/discord.svg"
                    alt="discord profile link"
                    width={32}
                    height={32}
                /></Link>
            </div>
        </nav>
    )
}