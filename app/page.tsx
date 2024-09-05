import Navbar from '@/components/navbar';
import Header from '@/components/header';
import Services from '@/components/services';
import Pricing from '@/components/pricing';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-20 w-full">
      <Navbar />
      <Header />
      <Services />
      <Pricing />
    </main>
  );
}
