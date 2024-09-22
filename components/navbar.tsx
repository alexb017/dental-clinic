import Link from 'next/link';
import { links } from '@/lib/placeholder-data';
import { Links } from '@/lib/types';
import LogoName from './logo-name';
import NavigateToForm from './navigate-to-form';

export default function Navbar() {
  const data: Links[] = links;

  return (
    <nav className="fixed z-50 w-full top-0 flex justify-center bg-zinc-100/50 backdrop-blur-xl">
      <div className="flex items-center justify-between max-w-[1080px] w-full h-full px-5 py-2">
        <LogoName />
        <div className="flex items-center gap-5">
          {data.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-medium text-black hover:text-orange-500 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-5">
          <NavigateToForm />
        </div>
      </div>
    </nav>
  );
}
