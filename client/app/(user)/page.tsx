import NewsCarousel from '@/components/shared/NewsCarousel';
import Header from '@/components/shared/Header';
import { NavBar } from '@/components/shared/NavBar';
import React from 'react';
import { TopCarousel } from '@/components/shared/TopCarousel';
import { Card, CardBody, CardHeader } from '@heroui/card';
import { Image } from '@heroui/image';
import { CardTitle } from '@/components/ui/card';
import PopularCarousel from '@/components/shared/PopularCarousel';
import Hot from '@/components/shared/Hot';
import { Footer } from '@/components/shared/Footer';
import { Phone } from 'lucide-react';

export default function page() {
  return (
    <div className="flex flex-col gap-6">
      <TopCarousel />
      <div className="border-none bg-gradient-to-tr from-[#FFB457] to-[#FF705B] relative rounded-lg p-4">
        <div>
          <Image
            src={'drones/1.png'}
            width={220}
            className="z-1 absolute -top-[80px] -left-[60px] transform scale-x-[-1] scale-y-[-1]"
          />
          <div className="ml-[180px]">
            <p className="text-xl font-medium">Бесплатная доставка по всей России</p>
            <p className="text-md font-medium">Любые методы оплаты, рассчетные счета, криптовалюты</p>
          </div>
        </div>
      </div>
      <NewsCarousel />
      <Hot />
    </div>
  );
}
