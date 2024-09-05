import { Button } from './ui/button';
import VipPlan from './vip-plan';
import PricingList from './pricing-list';

export default function Pricing() {
  return (
    <section className="flex flex-col gap-12 max-w-[1080px] w-full px-5">
      <div className="flex flex-row justify-between px-8">
        <h1 className="scroll-m-20 text-4xl font-semibold tracking-tighter lg:text-5xl">
          <span className="text-zinc-500">Our</span> Pricing
        </h1>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-row gap-5">
          <PricingList />
          <VipPlan />
        </div>
        <div className="flex items-center justify-between bg-white rounded-3xl p-8">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Have a question about our pricing?
          </h4>
          <Button className="text-base rounded-full text-black border bg-transparent hover:bg-zinc-50">
            Email us
          </Button>
        </div>
      </div>
    </section>
  );
}
