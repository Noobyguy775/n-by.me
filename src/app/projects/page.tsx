import Image from 'next/image';

export default function projects() {
  return <>
    <Image
      src="/files/beautiful_avatar.png"
      alt="Beautiful Avatar"
      width={128}
      height={128}
    />
    <p>
      {"Nothing's here yet! You'll check back later, right?\n\nRight MathU?"}
    </p>
  </>;
}
