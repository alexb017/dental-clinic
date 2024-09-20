import CardServicesList from '@/components/card-services-list';

export default function Page() {
  return (
    <div className="flex flex-col justify-center gap-10 my-20 w-full max-w-[640px] px-5">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-4xl font-extrabold tracking-tighter lg:text-6xl text-orange-500">
          Services
        </h1>
        {/* A description about dental servicies */}
        <h4 className="text-xl text-center text-zinc-500">
          Our services are designed to help you with your dental needs. We offer
          a wide range of services to help you maintain your oral health. Our
          team of professionals is here to help you with any dental issue you
          may have.
        </h4>
      </div>
      {/* A list of dental services */}
      <CardServicesList />
    </div>
  );
}
