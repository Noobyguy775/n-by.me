import Image from 'next/image';
import Link from 'next/link';

interface ProjectLink {
  name: string;
  href: string;
  icon: string;
}

export default function ProjectCard(
  title: string,
  description: string,
  link: string,
  icon: string = '',
  links: Array<ProjectLink> = []
) {
  return (
    <div
      id="project-card"
      className="border-secondary-600 bg-background-800 border-4 p-2"
    >
      <div className="grid grid-cols-4 items-center">
        <div className="col-span-1">
          <Link href={link}>
            <Image
              src={icon}
              alt={`${title} icon`}
              width={128}
              height={128}
              id={title.toLowerCase() + '-project-card-icon'}
            />
          </Link>
        </div>
        <div className="col-span-3 flex flex-col gap-1">
          <h3>
            <Link href={link}>{title}</Link>
          </h3>
          <p className="p-2">{description}</p>
          <div className="flex flex-row-reverse items-center gap-2">
            {links.map((l, index) => (
              <Link key={index} href={l.href}>
                <Image
                  src={l.icon}
                  alt={`${l.name} link`}
                  width={32}
                  height={32}
                  className="spin-image"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
