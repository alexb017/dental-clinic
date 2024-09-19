import { services } from '@/lib/placeholder-data';
import { Service } from '@/lib/types';
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
} from './ui/card';

export default function CardServicesList() {
  const data: Service[] = services;

  return (
    <div className="flex flex-col gap-5">
      {data.map((service) => (
        <Card key={service.label} className="rounded-3xl">
          <CardHeader>
            <CardTitle className="text-3xl">{service.label}</CardTitle>
            <CardDescription className="text-2xl font-semibold tracking-tight text-orange-500">
              <small className="text-sm font-medium leading-none">$</small>
              {service.price}
              <small className="text-sm font-medium leading-none">
                / {service.state}
              </small>
            </CardDescription>
          </CardHeader>
          <CardContent className="text-xl text-zinc-500">
            {service.content}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
