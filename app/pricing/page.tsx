import CardPricingList from '@/components/card-pricing-list';

export const metadata = {
  title: 'Pricing | Dental Clinic',
  description: 'A list of dental pricing.',
};

export default function Page() {
  return (
    <div className="flex flex-col justify-center gap-10 my-20 w-full max-w-[640px] px-5">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-5xl font-extrabold tracking-tighter md:text-6xl text-orange-500">
          Pricing
        </h1>
        <p className="text-xl text-center text-zinc-500">
          Our pricing is designed to be affordable for everyone. <br></br> We
          offer a wide range of pricing options to help you maintain your oral
          health.
        </p>
      </div>
      <CardPricingList />
    </div>
  );
}
