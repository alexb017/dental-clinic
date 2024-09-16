import LogoIcon from './icons/logo';

export default function LogoName() {
  return (
    <div className="flex items-center gap-2">
      <LogoIcon className="w-8 h-8" />
      <span className="text-2xl text-orange-500 font-bold tracking-tighter">
        Dental Clinic
      </span>
    </div>
  );
}
