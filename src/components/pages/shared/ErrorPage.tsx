'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';

type ErrorPageProps = {
  title: string;
  text: string;
};

export default function ErrorPage({ title, text }: ErrorPageProps) {
  const router = useRouter();
  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-center gap-10 text-center">
        <div className="flex flex-col gap-5">
          <div className="text-4xl font-semibold">{title}</div>
          <div className="text-text-300 text-lg">{text}</div>
        </div>
        <div className="flex flex-col gap-4">
          <Link href="/">
            Main Floor <span className="link-arrow">{'->'}</span>
          </Link>
          <p 
          onClick={() => router.back()}
          className="link"
          >
            <span className="link-arrow">{'<-'}</span> Previous Floor
          </p>
        </div>
      </div>
    </>
  );
}
