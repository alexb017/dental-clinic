'use client';

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';
import { Button } from './ui/button';
import { Bars3Icon, PhoneIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { links } from '@/lib/placeholder-data';
import { Links } from '@/lib/types';
import Link from 'next/link';
import LogoName from './logo-name';
import NavigateToForm from './navigate-to-form';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function NavbarMenuMobile() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const data: Links[] = links;
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsDialogOpen(false);
  }, [pathname, searchParams]);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button className="p-0 h-6 bg-transparent text-black hover:bg-transparent">
          <Bars3Icon className="w-6 h-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col items-center justify-center gap-20 top-0 right-0 bottom-0 left-0 w-full h-full border-none bg-transparent translate-x-0 translate-y-0 shadow-none data-[state=closed]:slide-out-to-left-0 data-[state=closed]:slide-out-to-top-0 data-[state=open]:slide-in-from-left-0 data-[state=open]:slide-in-from-top-[20px]">
        <DialogHeader className="items-center">
          <DialogDescription>Welcome to our clinic.</DialogDescription>
          <DialogTitle>
            <LogoName />
          </DialogTitle>
        </DialogHeader>
        <div className="relative flex flex-col items-center justify-center gap-8">
          <div className="flex flex-col items-center gap-5">
            {data.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-4xl text-black hover:text-orange-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <NavigateToForm setIsDialogOpen={setIsDialogOpen} />
        </div>
        <div className="flex items-center gap-2">
          <PhoneIcon className="w-6 h-6 text-black" />
          <h3 className="text-2xl tracking-tight text-black">
            +1 (234) 567-890
          </h3>
        </div>
        <DialogClose asChild>
          <Button className="absolute top-5 left-5 flex w-6 h-6 bg-transparent border-none hover:bg-transparent p-0">
            <XMarkIcon className="w-6 h-6 text-black" />
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
