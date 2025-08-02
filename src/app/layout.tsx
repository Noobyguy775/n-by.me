import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const FiraCode = Fira_Code({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'noo.by',
  description: 'my user profile >:3',
  authors: [{ name: 'nooby' }],
  keywords: [
    'profile',
    'projects',
    'socials',
    'nooby',
    'noo.by',
    'natro macro',
    'bloxbind',
  ],
  openGraph: {
    type: 'website',
    title: 'noo.by',
    url: 'https://n-by.me',
    description: 'my user profile >:3',
    images: [
      {
        url: 'https://n-by.me/public/files/icon.png',
        width: 200,
        height: 200,
        alt: 'website icon',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={FiraCode.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
