import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { pricing } from '@/lib/placeholder-data';
import { type Pricing } from '@/lib/types';

export default function CardPricingList() {
  const data: Pricing[] = pricing;

  return (
    <div className="flex flex-col gap-5">
      {data.map((pricing) => (
        <Card
          key={pricing.label}
          className="rounded-3xl border-none shadow-none"
        >
          <CardHeader className="flex-row items-center h-full p-8">
            <CardTitle className="text-3xl w-1/2 border-r mr-8 tracking-tighter">
              {pricing.label}
            </CardTitle>
            <CardDescription
              className="text-3xl font-semibold tracking-tight text-orange-500"
              style={{ marginTop: '0' }}
            >
              ${pricing.price}
              <small className="text-sm font-medium leading-none">
                / {pricing.state}
              </small>
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
