import Image from "next/image";
import Link from "next/link";

export default function SocialCard(name: "Github" | "Roblox" | "Discord", link: string, icon: string = '', username: string = '') {
    return (
        <div id="social-card" className="border-4 border-primary-600 bg-background-800 p-2 w-40 h-40 flex items-center justify-center">
            <div className="flex flex-col gap-1 items-center">
                <Link href={link}>
                    <Image
                        src={icon}
                        alt={`${name} icon`}
                        width={64}
                        height={64}
                        id={name.toLowerCase() + '-social-card-icon'}
                    />
                </Link>
                <h3><Link href={link}>{name}</Link></h3>
                <p>{username}</p>
            </div>
        </div>
    )
}