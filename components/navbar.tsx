import Link from 'next/link';
import { links } from '@/lib/placeholder-data';
import { Links } from '@/lib/types';
import LogoName from './logo-name';
import NavigateToForm from './navigate-to-form';
import NavbarMenuMobile from './navbar-menu-mobile';
import { Suspense } from 'react';

export default function Navbar() {
  const data: Links[] = links;

  return (
    <nav className="fixed z-50 w-full h-16 top-0 flex justify-center bg-zinc-100/50 backdrop-blur-xl">
      <div className="flex items-center max-w-[1080px] w-full h-full px-5">
        <div className="flex items-center justify-between w-full md:hidden">
          <Suspense fallback={null}>
            <NavbarMenuMobile />
          </Suspense>
          <LogoName />
          <div className="w-6"></div>
        </div>
        <div className="hidden md:flex items-center justify-between w-full">
          <LogoName />
          <div className="flex items-center gap-8">
            {data.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-black hover:text-orange-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-5">
            <NavigateToForm />
          </div>
        </div>
      </div>
    </nav>
  );
}
