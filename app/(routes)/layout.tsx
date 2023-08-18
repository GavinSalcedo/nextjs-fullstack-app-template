import type { Metadata } from 'next';
import Navbar from '../_components/Navbar';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bad Friends',
  description: 'Generated by Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
