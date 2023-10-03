import './globals.css';
import type { Metadata } from 'next';
import { Lato } from 'next/font/google';

const lato = Lato({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Crontext',
  description: 'Convert text format schedule to a cron definition.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/images/favicon.ico" sizes="any" />
      <body className={lato.className}>{children}</body>
    </html>
  );
}