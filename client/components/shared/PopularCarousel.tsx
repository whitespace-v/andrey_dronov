import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardHeader, CardBody, CardFooter } from '@heroui/card';
import { Image } from '@heroui/image';
import { Button } from '@heroui/button';

export default function PopularCarousel() {
  return (
    <div>
      <p className="text-2xl mb-4 mt-4 tracking-wider font-medium">Популярные</p>
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
                  <CardHeader className="absolute z-1 top-1 flex-col items-start">
                    <p className="text-tiny text-white/60 uppercase font-bold">New</p>
                    <h4 className="text-black font-medium text-2xl">Acme camera</h4>
                  </CardHeader>
                  <Image
                    removeWrapper
                    alt="Card example background"
                    className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                    src="https://heroui.com/images/card-example-6.jpeg"
                  />
                  <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-1 justify-between">
                    <div>
                      <p className="text-black text-2xl">120.000 ₽</p>
                    </div>
                    <Button className="text-tiny" color="primary" size="sm">
                      Просмотр
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
    </div>
  );
}
