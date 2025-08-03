import Image from 'next/image';
import Link from 'next/link';

export default function SocialCard(
  name: 'Github' | 'Roblox' | 'Discord',
  link: string,
  icon: string = '',
  username: string = ''
) {
  return (
    <div
      id="social-card"
      className="border-primary-600 bg-background-800 flex h-40 w-40 items-center justify-center border-4 p-2"
    >
      <div className="flex flex-col items-center gap-1">
        <Link href={link}>
          <Image
            src={icon}
            alt={`${name} icon`}
            width={64}
            height={64}
            id={name.toLowerCase() + '-social-card-icon'}
            className="spin-image"
          />
        </Link>
        <h3>
          <Link href={link}>{name}</Link>
        </h3>
        <p>{username}</p>
      </div>
    </div>
  );
}
