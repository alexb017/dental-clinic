export default function About() {
  return (
    <section className="flex flex-col gap-12 max-w-[1080px] w-full px-5">
      <div className="flex flex-row justify-between px-8">
        <h1 className="scroll-m-20 text-4xl font-semibold tracking-tighter lg:text-5xl">
          About <br></br>
          <span className="text-zinc-500">our team</span>
        </h1>
      </div>
      <div className="w-full max-w-[510px] p-8">
        <h4 className="text-zinc-500 scroll-m-20 text-xl font-semibold tracking-tight">
          We understand that nothing is more important than having experts
          taking care of your dental needs. Together, we&apos;ll find solutions
          to make you smile again.
        </h4>
      </div>
    </section>
  );
}
