import FacebookFillIcon from './icons/facebook-fill';
import InstagramFillIcon from './icons/instagram-fill';
import LogoIcon from './icons/logo';
import { Button } from './ui/button';
import Link from 'next/link';
import { links } from '@/lib/placeholder-data';
import { Links } from '@/lib/types';
import LogoName from './logo-name';

export default function Footer() {
  const data: Links[] = links;

  return (
    <section className="flex justify-center w-full pt-20 pb-8 bg-white">
      <div className="max-w-[1080px] w-full px-5">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between">
            <div className="flex flex-col gap-8">
              <LogoName />
              <div className="flex flex-col gap-2">
                <a href="#">dentalclinic@gmail.com</a>
                <a href="#">+123 456 7890</a>
                <div className="flex gap-2">
                  <a
                    className="flex p-1 rounded-xl border bg-zinc-200 hover:bg-zinc-300 transition-colors"
                    href="#"
                  >
                    <FacebookFillIcon className="h-8" />
                  </a>
                  <a
                    className="flex p-1 rounded-xl border bg-zinc-200 hover:bg-zinc-300 transition-colors"
                    href="#"
                  >
                    <InstagramFillIcon className="h-8" />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex gap-20">
              <div className="flex flex-col gap-2">
                {data.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-medium text-black hover:text-zinc-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-5 w-80">
                <h4 className="text-xl font-semibold tracking-tight">
                  We understand the importance of dental care and oral hygiene.
                </h4>
                <div className="flex gap-2">
                  <Button className="text-base rounded-full bg-zinc-800">
                    Book a call
                  </Button>
                  <Button className="text-base rounded-full text-black border bg-transparent hover:bg-zinc-50">
                    Email us
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t pt-8">
            <div className="flex justify-between">
              <div className="flex gap-5">
                <p>&copy; 2024 Dental Clinic Inc. All rights reserved.</p>
              </div>
              <div className="flex gap-5">
                <a href="#">Credits</a>
                <a href="#">Terms of Service</a>
                <a href="#">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
