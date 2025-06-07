import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';
import { Link } from '@heroui/link';
import clsx from 'clsx';
import { siteConfig } from '@/config/site';
import { fontSans } from '@/config/fonts';
import { Phone, Slash } from 'lucide-react';
import Header from '@/components/shared/Header';
import { NavBar } from '@/components/shared/NavBar';
import PopularCarousel from '@/components/shared/PopularCarousel';
import { Footer } from '@/components/shared/Footer';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="bg-primary/60 backdrop-blur-md border-zinc-100/50 border-b-1 fixed top-0 left-0 right-0 z-40">
        <div className="max-w-7xl mx-auto pl-[24px] text-sm 2 pt-2 pb-2 flex justify-between">
          <div className="flex gap-5">
            <div>Доставка</div>
            <div>Продукция</div>
            <div>Оплата</div>
            <div>Отзывы</div>
          </div>
          <div className="flex gap-5">
            <div className="flex items-center gap-2">
              <Phone size={18} strokeWidth={2.5} /> +7 (123) 456-78-90
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} strokeWidth={2.5} /> +7 (123) 456-78-90
            </div>
          </div>
        </div>
      </div>
      <Header />
      <NavBar />
      <Breadcrumb className="ml-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Главная</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/catalog">Каталог</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/catalog/0">Серия Mavic</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/catalog/0/0">Mavic Pro 5</BreadcrumbLink>
            {/* <BreadcrumbPage>Mavic Pro 5</BreadcrumbPage> */}
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {children}
      <PopularCarousel />
      <Footer />
    </div>
  );
}
