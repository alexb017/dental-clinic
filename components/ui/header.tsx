export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center w-full">
      <div
        className="bg-zinc-100 rounded-b-3xl"
        style={{
          width: 'calc(100vw - 180px)',
          height: 'calc(100vh - 180px)',
          backgroundImage: 'url(/images/close-up-dentist-instruments-4.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="flex items-center flex-col max-w-[1080px] p-5">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-8xl">
          Dental Clinic
        </h1>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-zinc-500">
          We understand the importance of dental care and oral hygiene.
        </h3>
      </div>
    </header>
  );
}
