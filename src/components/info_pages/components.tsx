import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function TitleBanner({ title }: { title: string }) {
  return (
    <div className="border-primary-400 bg-background-850 border-4 p-4">
      <h1 className="text-center text-4xl font-bold">{title}</h1>
    </div>
  );
}

export function Wrapper({ children }: { children: ReactNode }) {
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-10 text-center">
      {children}
    </div>
  );
}

export function TextBlock({ children }: { children: ReactNode }) {
  return (
    <div className="border-accent-400 bg-background-850 border-4 p-4">
      {children}
    </div>
  );
}

export function Grid({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
}

export function ProjectPreview({
  title,
  description,
  link,
  image,
  theme,
}: {
  title: string;
  description: string;
  link: string;
  image: string;
  theme: string;
}) {
  return (
    <div
      className={`${theme} flex flex-col items-center justify-center border-4 p-4`}
      id={title.toLowerCase() + '-project-preview-card'}
    >
      <div className="w-full">
        <Link href={link}>
          <Image
            src={image}
            alt={`Preview of ${title}`}
            width={500}
            height={500}
            id={title.toLowerCase() + '-project-preview-icon'}
            className="h-[50vh] max-h-[500px] w-full rounded-sm object-contain"
          />
        </Link>
      </div>
      <div>
        <h3
          id={title.toLowerCase() + '-project-preview-title'}
          className="project-preview-title"
        >
          <Link href={link}>
            <span className="link-arrow">{'->'}</span> {title}{' '}
            <span className="link-arrow">{'->'}</span>
          </Link>
        </h3>
        <p className="p-2">{description}</p>
      </div>
    </div>
  );
}
