import { Card, CardFooter, CardHeader } from '@heroui/card';
import { Image } from '@heroui/image';
import React from 'react';

export default function Hot() {
  return (
    <div>
      <p className="text-2xl mb-4 mt-4 tracking-wider font-medium">Подборки</p>
      <div className="w-full">
        <div className="flex gap-4">
          <Card className="h-fit grow">
            <CardHeader className="absolute z-1 top-1 flex-col items-start">Серия Mini</CardHeader>
            <Image
              removeWrapper
              src="/goods/mini.png"
              height={400}
              className="z-0 w-full h-full object-cover hover:scale-125 transition-transform duration-300"
            />
            <CardFooter className="absolute bg-gray-400/30 bottom-0 border-t-1 border-zinc-100/50 z-1 justify-between">
              Минималистичная серия скрытная незаметная мощная
            </CardFooter>
          </Card>
          <Card className="h-fit grow">
            <CardHeader className="absolute z-1 top-1 flex-col items-start">Серия DJI Neo</CardHeader>
            <Image
              removeWrapper
              src="/goods/neo.png"
              height={400}
              className="z-0 w-full h-full object-cover hover:scale-125 transition-transform duration-300"
            />
            <CardFooter className="absolute bg-gray-400/30 bottom-0 border-t-1 border-zinc-100/50 z-1 justify-between">
              Минималистичная серия скрытная незаметная мощная
            </CardFooter>
          </Card>
          <Card className="h-fit grow">
            <CardHeader className="absolute z-1 top-1 flex-col items-start">Серия DJI Flip</CardHeader>
            <Image
              removeWrapper
              src="/goods/flip.png"
              height={400}
              className="z-0 w-full h-full object-cover hover:scale-125 transition-transform duration-300"
            />
            <CardFooter className="absolute bg-gray-400/30 bottom-0 border-t-1 border-zinc-100/50 z-1 justify-between">
              Минималистичная серия скрытная незаметная мощная
            </CardFooter>
          </Card>
        </div>
        <div className="flex gap-4 mt-4">
          <Card className="h-fit grow">
            <CardHeader className="absolute z-1 top-1 flex-col items-start">Серия Air</CardHeader>
            <Image
              removeWrapper
              src="/goods/air.png"
              height={350}
              className="z-0 w-full h-full object-cover hover:scale-125 transition-transform duration-300"
            />
            <CardFooter className="absolute bg-gray-400/30 bottom-0 border-t-1 border-zinc-100/50 z-1 justify-between">
              Минималистичная серия скрытная незаметная мощная
            </CardFooter>
          </Card>
          <Card className="h-fit grow">
            <CardHeader className="absolute z-1 top-1 flex-col items-start">Серия Mavic</CardHeader>
            <Image
              removeWrapper
              src="/goods/mavic.png"
              height={350}
              className="z-0 w-full h-full object-cover hover:scale-125 transition-transform duration-300"
            />
            <CardFooter className="absolute bg-gray-400/30 bottom-0 border-t-1 border-zinc-100/50 z-1 justify-between">
              Минималистичная серия скрытная незаметная мощная
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
