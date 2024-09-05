import Link from 'next/link';
import { Button } from './ui/button';
import { Info } from 'lucide-react';
import ServicesList from './services-list';

export default function Services() {
  return (
    <section className="flex flex-col gap-12 max-w-[1080px] w-full px-5">
      <div className="flex flex-row justify-between px-8">
        <h1 className="scroll-m-20 text-4xl font-semibold tracking-tighter lg:text-5xl">
          We&apos;d love to welcome <br></br>{' '}
          <span className="text-zinc-500">you to our practice.</span>
        </h1>
        <Button className="self-end text-base rounded-full shadow-xl py-7 px-7 bg-zinc-800">
          Book a call
        </Button>
      </div>
      <ServicesList />
      <div className="flex items-center gap-2 px-8">
        <Info className="h-4 w-4 inline-block text-zinc-500" />
        <p className="text-zinc-500">
          You don&apos;t find any service?{' '}
          <Link
            className="inline-flex items-center gap-1 underline text-black hover:text-zinc-500"
            href="/services"
          >
            View all services
          </Link>
        </p>
      </div>
    </section>
  );
}
