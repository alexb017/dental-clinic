import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './ui/accordion';
import { services } from '@/lib/placeholder-data';
import { Service } from '@/lib/types';

export default function ServicesList() {
  const data: Service[] = services;

  // Splitting the data into two columns
  const firstFourElements = data.slice(0, 4);
  const nextFourElements = data.slice(4, 8);

  return (
    <div className="flex flex-col md:flex-row gap-5">
      <div className="flex flex-col gap-5 w-full">
        {firstFourElements.map((service) => (
          <Accordion
            key={service.label}
            collapsible
            type="single"
            style={{}}
            className="bg-white rounded-3xl"
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
            className="bg-white rounded-3xl"
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
  );
}
