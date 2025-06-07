import { Image } from '@heroui/image';
import React from 'react';
import SearchBar from './SearchBar';
import { ShoppingCart } from 'lucide-react';
import { ThemeSwitch } from '../theme-switch';

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      {/* <Image
        isBlurred
        alt="HeroUI Album Cover"
        className="m-5"
        src="https://heroui.com/images/album-cover.png"
        width={100}
      /> */}
      DRONEVL
      <SearchBar />
      <div className="">
        <ShoppingCart />
      </div>
      {/* <ThemeSwitch /> */}
    </div>
  );
}
