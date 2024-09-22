import Link from 'next/link';
import { Button } from './ui/button';
import ServicesList from './services-list';
import {
  ArrowTopRightOnSquareIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';
import NavigateToForm from './navigate-to-form';

export default function Services() {
  return (
    <section className="flex flex-col gap-12 max-w-[1080px] w-full px-5">
      <div className="flex flex-row justify-between px-8">
        <h1 className="text-4xl font-semibold tracking-tighter lg:text-5xl">
          We&apos;d love to welcome <br></br>{' '}
          <span className="text-zinc-500">you to our practice.</span>
        </h1>
        <NavigateToForm styleButton="large" className="self-end" />
      </div>
      <ServicesList />
      <div className="flex items-center gap-2 px-8">
        <InformationCircleIcon className="h-4 w-4 inline-block text-zinc-500" />
        <p className="text-zinc-500">
          You don&apos;t find any service?{' '}
          <Link
            className="inline-flex items-center gap-1 underline text-black hover:text-orange-500 transition-colors"
            href="/services"
          >
            View all services
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </Link>
        </p>
      </div>
    </section>
  );
}
