'use client';

import { Carousel, CarouselItem, CarouselContent } from './ui/carousel';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { headerImages } from '@/lib/placeholder-data';
import { ImageType } from '@/lib/types';

export default function HeaderCarousel() {
  const data: ImageType[] = headerImages;

  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{ align: 'start' }}
      className="relative overflow-hidden rounded-3xl flex items-center justify-center"
      style={{ width: 'calc(1280px - 40px)', height: '500px' }}
    >
      <CarouselContent>
        {data.map((image, index) => (
          <CarouselItem key={index} className="w-full h-full">
            <Image
              className="rounded-3xl"
              src={image.url}
              width={1280}
              height={500}
              objectFit="cover"
              objectPosition="center"
              alt={image.alt}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
