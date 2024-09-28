'use client';

import { Button } from './ui/button';
import { useAppContext } from '@/app/AppContext';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import clsx from 'clsx';

export default function NavigateToForm({
  styleButton,
  className,
  setIsDialogOpen,
}: {
  styleButton?: 'default' | 'dark' | 'large';
  className?: string;
  setIsDialogOpen?: (value: boolean) => void;
}) {
  const { appointmentRef } = useAppContext();
  const router = useRouter();
  const pathname = usePathname();

  // Scroll to appointment section if is on homepage
  // And remove the scroll action from localStorage
  useEffect(() => {
    if (
      pathname === '/' &&
      localStorage.getItem('scrollToAppointment') === 'true'
    ) {
      setTimeout(() => {
        appointmentRef?.current?.scrollIntoView({ behavior: 'smooth' });
        localStorage.removeItem('scrollToAppointment');
      }, 200);
    }
  }, [appointmentRef, pathname]);

  // Scroll to appointment section if is on homepage
  // Otherwise, store the scroll action in localStorage
  // And navigate to homepage
  const handleScrollToAppointment = () => {
    if (pathname !== '/') {
      localStorage.setItem('scrollToAppointment', 'true');
      router.push('/');
    } else {
      appointmentRef?.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Button
      onClick={() => {
        if (setIsDialogOpen) {
          setIsDialogOpen(false);
        }
        handleScrollToAppointment();
      }}
      className={clsx(
        'text-base rounded-full bg-orange-500 hover:bg-zinc-900 transition-colors',
        {
          'bg-black': styleButton === 'dark',
          'p-7 bg-white border text-black hover:bg-zinc-50':
            styleButton === 'large',
        },
        className
      )}
    >
      Book a call
    </Button>
  );
}
