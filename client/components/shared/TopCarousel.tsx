'use client';
import * as React from 'react';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardHeader, CardBody, CardFooter } from '@heroui/card';
import { Image } from '@heroui/image';
import { Button } from '@heroui/button';
import Autoplay from 'embla-carousel-autoplay';

export function TopCarousel() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      opts={{
        align: 'start',
        loop: true,
      }}
    >
      <CarouselContent>
        {Array.from({ length: 4 }).map((_, idx) => (
          <CarouselItem key={idx}>
            <div className="p-1">
              <Card isFooterBlurred className="w-full h-[400px] col-span-12 sm:col-span-5">
                <CardHeader className="absolute z-1 top-1 flex-col items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold">* Mavic Mini</p>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Card example background"
                  className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                  src={`drones/${idx + 1}.jpg`}
                />
                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-1 justify-between">
                  <div>
                    <p className="text-black text-tiny">
                      Mavic Mini - универсальная модель с внушающими характеристиками, подойдет для любых ситуаций.{' '}
                    </p>
                  </div>
                  <Button className="text-tiny" color="primary" size="sm">
                    К модели
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
