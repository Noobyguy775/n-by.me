import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <div
        style={{ height: 'calc(100vh - 68px)' }}
        className="flex w-full flex-col items-center justify-center gap-10 text-center"
      >
        <div className="flex flex-col gap-5">
          <div className="text-4xl font-semibold">{'[404] Not Found'}</div>
          <div className="text-text-300 text-lg">
            You find yourself in an elevator with one button:
          </div>
        </div>
        <div>
          <Link href="/">
            Main Floor <span className="link-arrow">{'->'}</span>
          </Link>
        </div>
      </div>
    </>
  );
}
