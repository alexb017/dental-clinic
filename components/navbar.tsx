import LogoIcon from './icons/logo';
import { Button } from './ui/button';
import Link from 'next/link';
import { links } from '@/lib/placeholder-data';
import { Links } from '@/lib/types';

export default function Navbar() {
  const data: Links[] = links;

  return (
    <nav className="fixed z-50 w-full max-w-[1080px] top-4 px-5">
      <div className="flex items-center justify-between h-full bg-zinc-50/[.5] rounded-full px-3 py-3 pl-6 shadow-2xl backdrop-blur-lg">
        <div className="flex">
          <LogoIcon className="w-10 h-10" />
        </div>
        <div className="flex items-center">
          {data.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-medium text-black py-2 px-4 rounded-xl hover:bg-zinc-50 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-5">
          <p className="text-zinc-500 font-medium">072 584 4799</p>
          <Button className="text-base rounded-full bg-zinc-800">
            Book a call
          </Button>
        </div>
      </div>
    </nav>
  );
}
