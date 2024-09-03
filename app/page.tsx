import Navbar from '@/components/navbar';
import Header from '@/components/header';
import Services from '@/components/services';
import { services } from '@/lib/placeholder-data';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-20 w-full">
      <Navbar />
      <Header />
      <Services data={services} />
    </main>
  );
}
