import Header from '@/components/header';
import Services from '@/components/services';
import Pricing from '@/components/pricing';
import About from '@/components/about';
import Reviews from '@/components/reviews';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-20 mt-16 mb-20 w-full overflow-hidden">
      <Header />
      <Services />
      <Pricing />
      <About />
      <Reviews />
      <Contact />
    </main>
  );
}
