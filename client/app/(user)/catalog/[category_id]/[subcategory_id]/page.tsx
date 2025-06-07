'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { Button } from '@heroui/button';
import { Image } from '@heroui/image';
import { Minus, Plus } from 'lucide-react';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';

export default function page() {
  const [count, setCount] = useState<number>(1);

  const countAdd = () => {
    count < 8 && setCount(count + 1);
  };
  const countSubstract = () => {
    count > 1 && setCount(count - 1);
  };
  return (
    <div className="flex">
      {/* left */}
      <div className="">
        {/* top */}
        <div className="flex justify-between">
          {/* slider */}
          <div className="">
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              orientation="vertical"
              className="mt-[50px]"
            >
              <CarouselContent className="h-[315px]">
                {Array.from({ length: 10 }).map((_, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 w-[100px] h-[100px]">
                    <Image
                      src="https://images.unsplash.com/photo-1533450718592-29d45635f0a9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anBnfGVufDB8fDB8fHww"
                      height={100}
                      radius="sm"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          {/* image */}
          <div>
            <Image
              src="https://images.unsplash.com/photo-1533450718592-29d45635f0a9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anBnfGVufDB8fDB8fHww"
              height={400}
            />
          </div>
        </div>
        {/* bottom */}
        <div className="mt-8">
          <p className="text-justify">
            Промышленный квадрокоптер, предлагающий новый стандарт коммерческой беспилотной авиации. Универсальная
            "рабочая лошадка" для выполнения работ разного уровня сложности. Конструкция допускает установку трех
            вариантов конфигурации полезной нагрузки: одной внизу, одной внизу и одной вверху, двух внизу и одной вверху
            одновременно. Специально для новой модели промышленного дрона DJI Matrice 300 RTK была разработана серия
            подвесов с камерами H20 в двух версиях: с тремя датчиками и четырьмя датчиками (включая тепловизионный).
            Данная комплектация не включает в себя зарядный кейс и аккумуляторы. ПО для обработки тепловых изображений
            - DJI Thermal Analysis Tool 2 (скачать) Инструмент термического анализа DJI можно использовать для анализа и
            обработки тепловых изображений. Определяя информацию о температуре критических областей мишени, программное
            обеспечение может быть использовано для анализа объектов во многих промышленных приложениях. Крупные
            инциденты могут быть предотвращены или устранены быстро с помощью программного обеспечения для обнаружения и
            точного определения температурных аномалий в оборудовании при плановых проверках. Данная комплектация не
            включает в себя зарядный кейс и аккумуляторы. ПО для обработки тепловых изображений - DJI Thermal Analysis
            Tool 2 (скачать) Инструмент термического анализа DJI можно использовать для анализа и обработки тепловых
            изображений. Определяя информацию о температуре критических областей мишени, программное обеспечение может
            быть использовано для анализа объектов во многих промышленных приложениях. Крупные инциденты могут быть
            предотвращены или устранены быстро с помощью программного обеспечения для обнаружения и точного определения
            температурных аномалий в оборудовании при плановых проверках.
          </p>
          {/* Характеристики */}
          <div>
            <div>ХАРАКТЕРИСТИКИ</div>
            <div>
              <div>Заголовок раздела</div>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Название</TableCell>
                    <TableCell>Характеристика</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Название</TableCell>
                    <TableCell>Характеристика</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Название</TableCell>
                    <TableCell>Характеристика</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div>
              <div>Заголовок раздела</div>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Название</TableCell>
                    <TableCell>Характеристика</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Название</TableCell>
                    <TableCell>Характеристика</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Название</TableCell>
                    <TableCell>Характеристика</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div>
              <div>Заголовок раздела</div>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Название</TableCell>
                    <TableCell>Характеристика</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Название</TableCell>
                    <TableCell>Характеристика</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Название</TableCell>
                    <TableCell>Характеристика</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="h-full flex-1 sticky top-10 pl-6">
        <div className="">
          <div className="text-sm">Серия Mavic</div>
          <div className="text-xl font-bold">Квадрокоптер DJI Mavic 3 Classic (DJI RC-N1)</div>
          <div className="text-sm text-green-600 mt-2">в наличии (6 шт.)</div>
          <div className="text-3xl font-medium mt-2">196 000 ₽</div>
          <div className="text-md mt-2 mb-2">Модели:</div>

          <div className="flex items-center gap-4 w-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1533450718592-29d45635f0a9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anBnfGVufDB8fDB8fHww"
              width={100}
              height={100}
              radius="none"
              className="border-b-[4px] border-gray-400 border-solid"
            />
            <Image
              src="https://images.unsplash.com/photo-1533450718592-29d45635f0a9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anBnfGVufDB8fDB8fHww"
              width={100}
              height={100}
              radius="none"
              className="border-b-[4px] border-gray-400 border-solid"
            />
            <Image
              src="https://images.unsplash.com/photo-1533450718592-29d45635f0a9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anBnfGVufDB8fDB8fHww"
              width={100}
              height={100}
              radius="none"
              className="border-b-[4px] border-gray-400 border-solid"
            />
            <Image
              src="https://images.unsplash.com/photo-1533450718592-29d45635f0a9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anBnfGVufDB8fDB8fHww"
              width={100}
              height={100}
              radius="none"
              className="border-b-[4px] border-primary border-solid"
            />
          </div>
          <div className="mt-4 flex gap-20">
            <div className="flex items-center justify-between w-[120px] rounded-xl bg-default-200 h-fit">
              <div onClick={() => countSubstract()} className="bg-primary rounded-xl p-2 cursor-pointer">
                <Minus />
              </div>
              <div>{count}</div>
              <div onClick={() => countAdd()} className="bg-primary rounded-xl p-2 cursor-pointer">
                <Plus />
              </div>
            </div>
            <Button className="" radius="sm" color="primary" size="lg">
              В корзину
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
