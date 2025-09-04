import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Jersey_20 as Jersey20 } from 'next/font/google';

const jerseyFont = Jersey20({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-jersey',
});

export const metadata: Metadata = {
  title: 'cos777-dev-nextjs',
  description: 'Empowering Students to Connect, Create and Lead.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jerseyFont.variable}>
      <body className="font-sans antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
