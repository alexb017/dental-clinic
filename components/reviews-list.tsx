import { reviews } from '@/lib/placeholder-data';
import Image from 'next/image';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';

type Review = {
  name: string;
  nickname: string;
  avatar: string;
  review: string;
};

export default function ReviewsList() {
  const data = reviews as Review[];

  // break the data into 3 parts
  const first = data.slice(0, 3);
  const second = data.slice(3, 6);
  const third = data.slice(6, 9);

  const before = `before:content-[''] before:absolute before:inset-0 before:z-[1] before:bg-gradient-to-t before:from-zinc-100 before:to-transparent before:via-transparent before:from-0% before:via-25% before:to-50%`;

  return (
    <section className={`relative flex gap-5 ${before}`}>
      <div className="flex flex-col gap-5 w-full">
        {first.map((review) => (
          <div
            key={review.name}
            className="flex flex-col gap-5 p-5 rounded-3xl bg-white"
          >
            <div className="flex items-center gap-3">
              <div className="relative flex w-11 h-11">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  sizes="44px 44px"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <h4 className="text-xl font-semibold tracking-tighter leading-none">
                    {review.name}
                  </h4>
                  <CheckBadgeIcon className="h-5 w-5 text-sky-500" />
                </div>
                <small className="text-sm text-zinc-500 font-medium leading-none">
                  @{review.nickname}
                </small>
              </div>
            </div>
            <div>
              <p className="text-sm text-zinc-500">{review.review}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-5 w-full">
        {second.map((review) => (
          <div
            key={review.name}
            className="flex flex-col gap-5 p-5 rounded-3xl bg-white"
          >
            <div className="flex items-center gap-3">
              <div className="relative flex w-11 h-11">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  sizes="44px 44px"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <h4 className="text-xl font-semibold tracking-tighter leading-none">
                    {review.name}
                  </h4>
                  <CheckBadgeIcon className="h-5 w-5 text-sky-500" />
                </div>
                <small className="text-sm text-zinc-500 font-medium leading-none">
                  @{review.nickname}
                </small>
              </div>
            </div>
            <div>
              <p className="text-sm text-zinc-500">{review.review}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-5 w-full">
        {third.map((review) => (
          <div
            key={review.name}
            className="flex flex-col gap-5 p-5 rounded-3xl bg-white"
          >
            <div className="flex items-center gap-3">
              <div className="relative flex w-11 h-11">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  sizes="44px 44px"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <h4 className="text-xl font-semibold tracking-tighter leading-none">
                    {review.name}
                  </h4>
                  <CheckBadgeIcon className="h-5 w-5 text-sky-500" />
                </div>
                <small className="text-sm text-zinc-500 font-medium leading-none">
                  @{review.nickname}
                </small>
              </div>
            </div>
            <div>
              <p className="text-sm text-zinc-500">{review.review}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
