import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { AppProvider } from './AppContext';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dental Clinic',
  description: 'A dental clinic website.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-100`}>
        <AppProvider>
          <Navbar />
          <div className="flex flex-col items-center justify-center">
            {children}
          </div>
          <Footer />
          <Toaster position="bottom-right" reverseOrder={false} />
        </AppProvider>
      </body>
    </html>
  );
}
