import VipPlan from './vip-plan';
import PricingList from './pricing-list';
import PriceQuestion from './price-question';

export default function Pricing() {
  return (
    <section className="flex flex-col gap-12 max-w-[1080px] w-full px-5">
      <div className="flex flex-row justify-between px-8">
        <h1 className="scroll-m-20 text-4xl font-semibold tracking-tighter lg:text-5xl">
          <span className="text-zinc-500">Our</span> Pricing
        </h1>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col lg:flex-row gap-5">
          <PricingList />
          <VipPlan />
        </div>
        <PriceQuestion />
      </div>
    </section>
  );
}
