export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center w-full">
      <div
        className="flex justify-center items-end pb-8 bg-zinc-100 rounded-3xl"
        style={{
          width: 'calc(1280px - 40px)',
          height: '500px',
          backgroundImage: 'url(/images/2149164286.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="max-w-[1080px] pt-8">
        <h1 className="text-4xl text-orange-500 text-center font-extrabold tracking-tighter xl:text-6xl">
          We understand the importance of dental care and oral hygiene.
        </h1>
      </div>
    </header>
  );
}
