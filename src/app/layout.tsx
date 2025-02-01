import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const InterFont = Inter({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  weight: ['400', '200', '700'],
});

export const metadata: Metadata = {
  title: 'the Car Dealer App',
  description: 'Find your car',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${InterFont.className} `}>
        <main className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
          {children}
        </main>
      </body>
    </html>
  );
}
