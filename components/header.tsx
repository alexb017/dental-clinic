export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center gap-8 w-full max-w-[1280px] px-5">
      <div className="flex justify-center items-end bg-zinc-100 rounded-3xl w-full h-[calc(100vh-96px)] md:h-[540px] bg-[url(/images/2149164286.jpg)] bg-cover bg-center p-8">
        <h1 className="max-w-[460px] text-5xl md:text-6xl text-white text-center font-bold tracking-tighter drop-shadow-lg md:hidden">
          Welcome to our dental clinic.
        </h1>
      </div>
      <h1 className="max-w-[1080px] text-5xl md:text-6xl xl:text-7xl text-orange-500 text-center font-extrabold tracking-tighter">
        We understand the importance of dental care, and your smile.
      </h1>
    </header>
  );
}
