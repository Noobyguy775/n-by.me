import Link from 'next/link';

export default function r() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2>Redirects</h2>
      <div className="grid grid-rows-3 gap-4">
        <Link href="/r/discord">{'=> r/Discord'}</Link>
        <Link href="/r/github">{'=> r/Github'}</Link>
        <Link href="/r/roblox">{'=> r/Roblox'}</Link>
      </div>
    </div>
  );
}
