import { Button } from './ui/button';
import { vipPlan } from '@/lib/placeholder-data';
import { VipPlanType } from '@/lib/types';

export default function VipPlan() {
  const data: VipPlanType[] = vipPlan;

  return (
    <section className="w-full p-8 rounded-3xl bg-zinc-800">
      {data.map((plan) => (
        <div key={plan.label} className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-5">
            <p className="text-white">
              {plan.period}{' '}
              <small className="text-sm text-zinc-300 bg-zinc-700 font-medium py-1 px-3 rounded-full">
                {plan.periodType}
              </small>
            </p>
            <h2 className="text-white scroll-m-20 text-3xl font-semibold tracking-tight">
              {plan.label}
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-16">
              <div className="flex flex-col gap-2">
                <h3 className="text-white scroll-m-20 text-3xl font-semibold tracking-tight">
                  ${plan.price}
                </h3>
                <Button className="text-base bg-white text-black rounded-full py-7 px-7 hover:bg-zinc-100">
                  Book a call
                </Button>
              </div>
              <p className="text-zinc-300 italic p-4 border border-zinc-700 rounded-2xl self-end">
                {plan.discount}
              </p>
            </div>
            <hr className="border-zinc-700" />
            <h4 className="scroll-m-20 text-xl text-white font-semibold tracking-tight">
              {plan.labelContent}
            </h4>
            <p className="text-zinc-300">{plan.content}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
