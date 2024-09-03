import Link from 'next/link';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './ui/accordion';
import { Button } from './ui/button';
import ArrowRightIcon from './icons/arrow-right';

type Service = {
  label: string;
  content: string;
};

export default function Services({ data }: { data: Service[] }) {
  const firstFourElements = data.slice(0, 4);
  const nextFourElements = data.slice(4, 8);

  return (
    <section className="flex flex-col gap-12 max-w-[1080px] w-full px-5">
      <div className="flex flex-row justify-between px-5">
        <h1 className="scroll-m-20 text-4xl font-semibold tracking-tighter lg:text-5xl">
          We&apos;d love to welcome <br></br>{' '}
          <span className="text-zinc-500">you to our practice.</span>
        </h1>
        <Button className="self-end text-base rounded-full shadow-xl py-7 px-7">
          Book a call
        </Button>
      </div>
      <div className="flex flex-row gap-5">
        <div className="flex flex-col gap-5 w-full">
          {firstFourElements.map((service) => (
            <Accordion
              key={service.label}
              collapsible
              type="single"
              style={{}}
              className="bg-white rounded-2xl p-8"
            >
              <AccordionItem value={service.label}>
                <AccordionTrigger>{service.label}</AccordionTrigger>
                <AccordionContent className="text-zinc-500">
                  {service.content}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
        <div className="flex flex-col gap-5 w-full">
          {nextFourElements.map((service) => (
            <Accordion
              key={service.label}
              collapsible
              type="single"
              className="bg-white rounded-2xl p-8"
            >
              <AccordionItem value={service.label}>
                <AccordionTrigger>{service.label}</AccordionTrigger>
                <AccordionContent className="text-zinc-500">
                  {service.content}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
      <p className="text-zinc-500">
        You don&apos;t find any service?{' '}
        <Link
          className="inline-flex items-center gap-1 underline text-black hover:text-zinc-500"
          href="/services"
        >
          View all services
        </Link>
      </p>
    </section>
  );
}
