import Footer from '@/components/Footer';
import ProjectCard from '@/components/projectCard';
import SocialCard from '@/components/socialCard';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div id="main">
      <div className="mt-10 flex h-full w-full flex-col items-center justify-center gap-15 text-center">
        <div id="intro" className="flex flex-row">
          <Image
            src="/files/pfp2.png"
            alt="profile picture 2"
            width={150}
            height={150}
            className={
              'bg-background-850 border-accent-600 hidden min-w-40 border-4 border-r-0 p-1 sm:block'
            }
          />
          <div
            className="bg-background-850 border-gradient flex min-h-42 flex-col justify-around gap-1 border-x-0 font-semibold"
            style={
              {
                '--gradient-color-1': 'var(--color-accent-600)',
                '--gradient-color-2': 'var(--color-primary-600)',
              } as React.CSSProperties
            }
          >
            <h1
              id="nooby"
              className="from-accent-400 to-primary-400 background-clip bg-linear-to-r"
            >
              n
              <span id="emdash" className="bg-text-100 background-clip">
                &mdash;&mdash;
              </span>
              <span id="oo">oo</span>by.me
            </h1>
            <p>
              {
                'Welcome to my corner! I like to play games, listen to music and code programs that are sometimes useful'
              }
              <span className="subtext">{' (i hope)'}</span>
            </p>
          </div>
          <Image
            src="/files/pfp.png"
            alt="profile picture"
            width={150}
            height={160}
            className={
              'bg-background-850 border-primary-600 hidden min-w-40 border-4 border-l-0 p-1 sm:block'
            }
          />
        </div>
        <div id="links" className="flex w-full flex-col items-center gap-4">
          <div className="border-secondary-600 bg-background-850 w-50 border-4 p-4">
            <div className="flex flex-row justify-center gap-1">
              <svg
                aria-label="icon"
                xmlns="http://www.w3.org/2000/svg"
                height="36px"
                viewBox="0 -960 960 960"
                width="36px"
                fill="#7b26a6"
              >
                <path d="M719.5-145 452.55-412q-22.91 11-46.98 17.5-24.07 6.5-51.07 6.5-87.75 0-149.37-61.63Q143.5-511.25 143.5-599q0-22.29 4.25-43.14Q152-663 160.5-682.5L299-546l109-108.5L273.5-791q19.5-8.5 39.25-14t41.78-5.5q87.97 0 149.72 61.75T566-599q0 29.07-6 53.13-6 24.06-18 45.12l266.95 266.71q7.55 7.65 7.55 19.49 0 11.83-7.76 19.56l-52.36 52.05q-7.78 7.44-18.48 6.44-10.69-1-18.4-8.5Z" />
              </svg>
              <h2>projects</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            {ProjectCard(
              'Natro Macro',
              'A macro to automate various repetitive tasks in Bee Swarm simulator on Roblox',
              'https://github.com/NatroTeam/NatroMacro',
              '/files/logos/natromacro.png',
              [
                {
                  name: 'Github',
                  href: 'https://github.com/NatroTeam/NatroMacro',
                  icon: '/files/logos/github.svg',
                },
                {
                  name: 'Discord',
                  href: 'https://discord.gg/natromacro',
                  icon: '/files/logos/discord.svg',
                },
              ]
            )}
            {ProjectCard(
              'Bloxbind',
              'A tool for facilitating the linking of Roblox and Discord accounts',
              'https://Bloxbind.com',
              '/files/logos/Bloxbind.svg',
              [
                {
                  name: 'Github',
                  href: 'https://github.com/Bloxbind',
                  icon: '/files/logos/github.svg',
                },
                {
                  name: 'Discord',
                  href: 'https://discord.gg/RbzXkeEPAF',
                  icon: '/files/logos/discord.svg',
                },
              ]
            )}
          </div>
          <div className="p-4">
            <h3>
              <Link href="/projects">
                More info <span className="link-arrow">{'->'}</span>
              </Link>
            </h3>
          </div>
        </div>
        <div id="socials" className="flex w-full flex-col items-center gap-3">
          <div className="border-primary-600 bg-background-850 w-50 border-4 p-4">
            <div className="flex flex-row justify-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="36px"
                viewBox="0 -960 960 960"
                width="36px"
                fill="#5e2aa2"
              >
                <path d="M547.61-486.54q44.94 0 76.37-31.17 31.43-31.17 31.43-75.95 0-44.79-31.28-76.22-31.28-31.44-76.22-31.44t-75.98 31.22q-31.04 31.21-31.04 75.88 0 44.89 30.89 76.29 30.89 31.39 75.83 31.39Zm-246.9 246.03q-24.63 0-42.41-17.79-17.79-17.78-17.79-42.41v-494.35q0-24.63 17.79-42.41 17.78-17.79 42.41-17.79h494.35q24.63 0 42.41 17.79 17.79 17.78 17.79 42.41v494.35q0 24.63-17.79 42.41-17.78 17.79-42.41 17.79H300.71ZM164.94-104.74q-24.63 0-42.41-17.79-17.79-17.78-17.79-42.41v-526.87h47.89v526.87q0 5.39 3.46 8.85t8.85 3.46h526.87v47.89H164.94Zm135-183.66h495.89q-46.98-55.32-110.98-87.14-63.99-31.83-136.9-31.83-72.9 0-136.96 31.83-64.07 31.82-111.05 87.14Z" />
              </svg>
              <h2>accounts</h2>
            </div>
          </div>
          <div className="grid grid-cols-3 justify-items-center gap-4">
            {SocialCard(
              'Github',
              '/r/github',
              '/files/logos/github.svg',
              'Noobyguy775'
            )}
            {SocialCard(
              'Roblox',
              '/r/roblox',
              '/files/logos/roblox.svg',
              'noobyguy775'
            )}
            {SocialCard(
              'Discord',
              '/r/discord',
              '/files/logos/discord.svg',
              'noo.by'
            )}
          </div>
          <div className="p-4">
            <h3>
              <Link href="/accounts">
                More info <span className="link-arrow">{'->'}</span>
              </Link>
            </h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
