import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import { pricing } from '@/lib/placeholder-data';
import { Pricing } from '@/lib/types';

export default function PricingList() {
  const data: Pricing[] = pricing;

  return (
    <div className="flex flex-col gap-5 rounded-3xl bg-white w-full p-8">
      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">
        Our pricing is transparent <br></br>{' '}
        <span className="text-zinc-500">and easy to understand.</span>
      </h2>
      <Table className="bg-white">
        {/* <TableHeader>
                <TableRow>
                  <TableHead>A list of our services</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader> */}
        <TableBody>
          {data.map((pricing) => (
            <TableRow key={pricing.label}>
              <TableCell>{pricing.label}</TableCell>
              <TableCell className="text-right">
                ${pricing.price}
                <small className="text-sm">/{pricing.state}</small>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
