import CarouselItems from './carousel-items';

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col gap-12 max-w-[1080px] w-full px-5"
    >
      <div className="flex flex-row justify-between px-8">
        <h1 className="text-4xl font-semibold tracking-tighter lg:text-5xl">
          About <br></br>
          <span className="text-zinc-500">our team</span>
        </h1>
      </div>
      <CarouselItems />
      <div className="w-full max-w-[510px] px-8">
        <h4 className="text-zinc-500 text-xl font-semibold tracking-tight">
          We understand that nothing is more important than having experts
          taking care of your dental needs. Together, we&apos;ll find solutions
          to make you smile again. Our team of professionals are dedicated to
          providing you with the best dental care. We are committed to giving
          you a beautiful and healthy smile.
        </h4>
      </div>
    </section>
  );
}
