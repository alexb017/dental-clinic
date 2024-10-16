import Image from 'next/image';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | Dental Clinic',
  description: 'Learn more about us.',
};

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center gap-20 my-20 w-full max-w-[1080px] px-5">
      <div className="flex flex-col items-center gap-5 max-w-[640px]">
        <h1 className="text-5xl font-extrabold tracking-tighter md:text-6xl text-orange-500">
          About Us
        </h1>
        <h4 className="text-xl text-center text-zinc-500">
          Our team of professionals is here to help you with any dental issue
          you may have. We offer a wide range of services to help you maintain
          your oral health.
        </h4>
      </div>
      <div className="flex flex-col md:flex-row gap-20 pt-20 border-t border-zinc-300">
        <div className="flex flex-col items-start gap-5 md:w-2/5">
          <h2 className="text-3xl font-semibold tracking-tight">
            We are here to help you with any dental issue you may have.
          </h2>
          <Link
            href="/contact"
            className="flex items-center gap-1 h-10 py-2 px-4 text-base rounded-full bg-transparent border border-zinc-500 text-black hover:bg-zinc-50"
          >
            Contact Us
            <ArrowUpRightIcon className="w-4 h-4 ml-2" />
          </Link>
        </div>
        <div className="flex flex-col gap-5 md:w-3/5">
          <p>
            Our team of professionals is dedicated to providing you with the
            best dental care in a comfortable and relaxing environment. We offer
            a wide range of services to meet your dental needs. Whether you need
            a routine cleaning or a more complex procedure, we are here to help.
            Our team is committed to providing you with the best care possible.
          </p>
          <p>
            We take the time to listen to your concerns and answer any questions
            you may have. We want you to feel comfortable and confident in the
            care you receive from us. Our goal is to help you achieve and
            maintain a healthy smile for life. We look forward to helping you
            achieve and maintain a healthy smile.
          </p>
          <p>
            We look forward to meeting you and helping you achieve a healthy
            smile. Contact us today to schedule an appointment.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-20 pt-20 border-t border-zinc-300">
        <div className="flex flex-col items-start gap-5 md:w-2/5">
          <small>Our story</small>
          <h2 className="text-3xl font-semibold tracking-tight">
            Our goal is to help you achieve and maintain a healthy smile for
            life.
          </h2>
          <p>
            Our story began with a simple idea: to provide the best dental care
            in a comfortable and relaxing environment. We wanted to create a
            place where people could feel comfortable and confident in the care
            they receive.
          </p>
        </div>
        <div className="w-full md:w-3/5">
          <Image
            src="/images/1043.jpg"
            alt="About Us"
            width={640}
            height={426}
            className="rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}
