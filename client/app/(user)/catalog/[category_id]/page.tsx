'use client';
import { useParams } from 'next/navigation';
import React from 'react';
import { Card, CardFooter, CardHeader } from '@heroui/card';
import { Image } from '@heroui/image';

export default function page() {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <div className="mt-6 mb-6">
        <p className="text-2xl mb-4 mt-4 tracking-wider font-medium">Серия Mini</p>
        <div className="w-full">
          <div className="flex gap-4">
            <Card className="h-fit grow">
              <CardHeader className="absolute z-1 top-1 flex-col items-start">Mini Pro 3</CardHeader>
              <Image
                removeWrapper
                src="/goods/mini.png"
                height={400}
                className="z-0 w-full h-full object-cover hover:scale-125 transition-transform duration-300"
              />
              <CardFooter className="absolute bg-gray-400/30 bottom-0 border-t-1 border-zinc-100/50 z-1 justify-between">
                Минималистичная серия скрытная незаметная мощная (описание моделей в серии)
              </CardFooter>
            </Card>
            <Card className="h-fit grow">
              <CardHeader className="absolute z-1 top-1 flex-col items-start">Mini Pro 2</CardHeader>
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
              <CardHeader className="absolute z-1 top-1 flex-col items-start">Mini 2</CardHeader>
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
              <CardHeader className="absolute z-1 top-1 flex-col items-start">Mini 3</CardHeader>
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
              <CardHeader className="absolute z-1 top-1 flex-col items-start">Mini 1</CardHeader>
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
    </div>
  );
}
