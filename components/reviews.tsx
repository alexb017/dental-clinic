import ReviewsList from './reviews-list';

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="flex flex-col gap-12 max-w-[1080px] w-full px-5"
    >
      <div className="flex flex-row justify-between px-8">
        <h1 className="scroll-m-20 text-4xl font-semibold tracking-tighter lg:text-5xl">
          Reviews from <br></br>
          <span className="text-zinc-500">our customers</span>
        </h1>
      </div>
      <ReviewsList />
    </section>
  );
}
