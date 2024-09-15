import {
  PaperAirplaneIcon,
  PhoneArrowUpRightIcon,
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
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 group">
              <PaperAirplaneIcon className="h-6 group-hover:text-zinc-500 transition-colors" />
              <a
                className="font-semibold group-hover:text-zinc-500 transition-colors"
                href="#"
              >
                Send us an email
              </a>
            </div>
            <div className="flex items-center gap-2 group">
              <FacebookOutlineIcon className="h-5 group-hover:text-zinc-500 transition-colors" />
              <a
                className="font-semibold group-hover:text-zinc-500 transition-colors"
                href="#"
              >
                Message us on Facebook
              </a>
            </div>
            <div className="flex items-center gap-2">
              <PhoneArrowUpRightIcon className="h-5" />
              <p className="font-semibold">+123 456 7890</p>
            </div>
            <div className="flex items-center gap-2">
              <MapPinIcon className="h-5" />
              <p className="font-semibold">
                1234 Street Name, City Name, Country
              </p>
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
