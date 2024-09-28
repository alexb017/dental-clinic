import ContactInfo from '@/components/contact-info';
import ContactMap from '@/components/contact-map';

export default function Contact() {
  return (
    <section className="flex flex-col gap-12 max-w-[1080px] w-full px-5">
      <div className="flex flex-row justify-between px-8">
        <h1 className="scroll-m-20 text-4xl font-semibold tracking-tighter lg:text-5xl">
          Get in touch <br></br> <span className="text-zinc-500">with us.</span>
        </h1>
      </div>
      <div className="flex flex-col gap-5 lg:flex-row">
        <ContactInfo />
        <ContactMap />
      </div>
    </section>
  );
}
