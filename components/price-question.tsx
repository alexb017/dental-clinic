import { Button } from './ui/button';

export default function PriceQuestion() {
  return (
    <div className="flex items-center justify-between bg-white rounded-3xl p-8">
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Have a question about our pricing?
      </h4>
      <Button className="text-base rounded-full text-black border bg-transparent hover:bg-zinc-50">
        Email us
      </Button>
    </div>
  );
}
