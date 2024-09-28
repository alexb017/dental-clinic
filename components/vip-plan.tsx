import { vipPlan } from '@/lib/placeholder-data';
import { VipPlanType } from '@/lib/types';
import NavigateToForm from './navigate-to-form';

export default function VipPlan() {
  const data: VipPlanType[] = vipPlan;

  return (
    <section className="w-full p-8 rounded-3xl bg-zinc-950 shadow-2xl">
      {data.map((plan) => (
        <div
          key={plan.label}
          className="flex flex-col justify-between h-full gap-5"
        >
          <div className="flex flex-col gap-5">
            <p className="text-white">
              {plan.period}{' '}
              <small className="text-sm text-zinc-300 bg-zinc-700 font-medium py-1 px-3 rounded-full">
                {plan.periodType}
              </small>
            </p>
            <h2 className="text-white text-4xl font-semibold tracking-tight xl:text-5xl">
              {plan.label}
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col md:flex-row justify-between gap-5 lg:gap-20">
              <div className="flex flex-col gap-2 justify-end">
                <h3 className="text-white text-4xl font-semibold tracking-tight">
                  ${plan.price}
                </h3>
                <NavigateToForm styleButton="large" />
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
