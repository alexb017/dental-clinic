import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import FacebookOutlineIcon from './icons/facebook-outline';
import ContactForm from './contact-form';

export default function ContactInfo() {
  return (
    <section className="bg-white rounded-3xl w-1/2 p-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold tracking-tight">
            We are here to help. <br></br>{' '}
            <span className="text-zinc-500">
              Get in touch with us for any inquiries.
            </span>
          </h2>
          <div className="flex flex-col items-start gap-2">
            <a
              className="flex items-center gap-2 font-semibold hover:text-orange-500 transition-colors"
              href="#"
            >
              <EnvelopeIcon className="h-5" />
              Send us an email
            </a>
            <a
              className="flex items-center gap-2 font-semibold hover:text-orange-500 transition-colors"
              href="#"
            >
              <FacebookOutlineIcon className="h-5" />
              Message us on Facebook
            </a>
            <div className="flex items-center gap-2 font-semibold">
              <PhoneIcon className="h-5" />
              +123 456 7890
            </div>
            <div className="flex items-center gap-2 font-semibold">
              <MapPinIcon className="h-5" />
              1234 Street Name, City Name, Country
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold tracking-tight">
            Make an <br></br> <span className="text-zinc-500">appointment</span>
          </h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
