import { Send, PhoneCall, MapPin } from 'lucide-react';

export default function ContactInfo() {
  return (
    <section className="bg-white rounded-3xl w-1/2 p-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Chat with us
          </h4>
          <p className="text-zinc-500">
            We are available 24/7 to answer your questions and help you with
            your dental needs.
          </p>
          <div className="flex items-center gap-2">
            <Send className="h-5 w-5 inline-block text-zinc-500" />
            <a className="font-semibold" href="mailto:dentalclinic@gmail.com">
              Shoot us an email
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Call us
          </h4>
          <p className="text-zinc-500">
            Call out team to book an appointment or ask any questions.
          </p>
          <div className="flex items-center gap-2">
            <PhoneCall className="h-5 w-5 inline-block text-zinc-500" />
            <a className="font-semibold" href="tel:+1234567890">
              +123 456 7890
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Visit us
          </h4>
          <p className="text-zinc-500">
            We are located in the heart of the city. Visit us anytime during
            working hours.
          </p>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 inline-block text-zinc-500" />
            <a className="font-semibold" href="tel:+1234567890">
              1234 Street Name, City Name, Country
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
