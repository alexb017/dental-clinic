import ContactInfo from '@/components/contact-info';
import ContactMap from '@/components/contact-map';

export default function Page() {
  return (
    <div className="flex gap-5 my-20 w-full max-w-[1080px] px-5">
      <ContactInfo />
      <ContactMap />
    </div>
  );
}
