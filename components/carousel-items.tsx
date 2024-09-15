import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './ui/carousel';
import { images } from '@/lib/placeholder-data';
import { ImageType } from '@/lib/types';

export default function CarouselItems() {
  const data: ImageType[] = images;

  // Duplicating the data to create a carousel effect
  const carouselImages = [...data, ...data, ...data];

  // Adding a gradient effect to the carousel
  const before = `before:content-[''] before:absolute before:inset-0 before:z-[1] before:bg-gradient-to-r before:from-zinc-100 before:to-transparent before:via-transparent before:from-0% before:via-25% before:to-50%`;

  return (
    <Carousel
      opts={{ align: 'start' }}
      className={`relative w-screen md:-translate-x-48 3xl:-translate-x-96 ${before}`}
    >
      <CarouselContent className="carousel-content">
        {carouselImages.map((image, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 2xl:basis-1/4 3xl:basis-1/5"
          >
            <div className="p-1">
              <Image
                className="rounded-3xl"
                src={image.url}
                width={667}
                height={1000}
                alt={image.alt}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
