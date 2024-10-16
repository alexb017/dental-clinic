import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Credits | Dental Clinic',
  description: 'A list of credits.',
};

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center gap-20 my-20 w-full max-w-[1080px] px-5">
      <h1 className="text-5xl font-extrabold tracking-tighter md:text-6xl text-black">
        Credits
      </h1>
      <p className="text-center">
        This page is a collection of images from freepik. <br></br> The images
        are used for demonstration purposes only.
      </p>
      <ul className="list-disc">
        <li>
          <a
            className="flex items-center gap-1 underline text-black hover:text-orange-500 transition-colors"
            target="_blank"
            href="https://www.freepik.com/free-photo/close-up-dentist-instruments_94938254.htm#fromView=search&page=1&position=50&uuid=c8072b4e-d06e-40ca-b62a-1c3c38302616"
          >
            Image by freepik
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-1 underline text-black hover:text-orange-500 transition-colors"
            target="_blank"
            href="https://www.freepik.com/free-photo/dentist-process-dental-services-dental-office-dental-treatment_26145006.htm#fromView=search&page=1&position=14&uuid=c8072b4e-d06e-40ca-b62a-1c3c38302616"
          >
            Image by Kireyonok_Yuliya on Freepik
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-1 underline text-black hover:text-orange-500 transition-colors"
            target="_blank"
            href="https://www.freepik.com/free-photo/female-dentist-looking-teeth-plaster-mold-clinic_3211933.htm#fromView=search&page=2&position=15&uuid=c8072b4e-d06e-40ca-b62a-1c3c38302616"
          >
            Image by freepik
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-1 underline text-black hover:text-orange-500 transition-colors"
            target="_blank"
            href="https://www.freepik.com/free-photo/close-up-dentist-instruments_94938245.htm#fromView=search&page=3&position=42&uuid=c8072b4e-d06e-40ca-b62a-1c3c38302616"
          >
            Image by freepik
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-1 underline text-black hover:text-orange-500 transition-colors"
            target="_blank"
            href="https://www.freepik.com/free-photo/dentist-process-dental-services-dental-office-dental-treatment_26144960.htm#fromView=search&page=1&position=42&uuid=8191ca7a-051c-4b99-854f-9831990ec970"
          >
            Image by Kireyonok_Yuliya on Freepik
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-1 underline text-black hover:text-orange-500 transition-colors"
            target="_blank"
            href="https://www.freepik.com/free-photo/dentist-process-dental-services-dental-office-dental-treatment_26144905.htm#fromView=search&page=3&position=49&uuid=8191ca7a-051c-4b99-854f-9831990ec970"
          >
            Image by Kireyonok_Yuliya on Freepik
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-1 underline text-black hover:text-orange-500 transition-colors"
            target="_blank"
            href="https://www.freepik.com/free-photo/full-shot-dentist-with-patient_20076918.htm#fromView=search&page=2&position=24&uuid=949470b7-649f-4330-af21-3b4af0d945f7"
          >
            Image by freepik
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-1 underline text-black hover:text-orange-500 transition-colors"
            target="_blank"
            href="https://www.freepik.com/free-photo/photo-smiling-dentist-standing-with-arms-crossed-with-her-colleague-showing-okay-sign_18017143.htm#fromView=search&page=1&position=36&uuid=cb407f17-58ad-41e9-936d-48c81ee32ee6"
          >
            Image by artursafronovvvv on Freepik
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </a>
        </li>
      </ul>
    </div>
  );
}
