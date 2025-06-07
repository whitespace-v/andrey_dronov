import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import React from 'react';

export default function SearchBar() {
  return (
    <div className="flex gap-2">
      <Input placeholder="Поиск" className="w-[600px]" radius="sm" />
      <Button radius="sm" color="primary">
        Найти
      </Button>
    </div>
  );
}
