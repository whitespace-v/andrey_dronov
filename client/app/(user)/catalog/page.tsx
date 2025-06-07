'use client';
import { Button } from '@heroui/button';
import { Card, CardBody, CardFooter, CardHeader } from '@heroui/card';
import { Image } from '@heroui/image';
import React from 'react';
import { Slider } from '@heroui/slider';
import { Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from '@heroui/dropdown';
import { Pagination } from '@heroui/pagination';

export default function page() {
  return (
    <div className="flex justify-between gap-4 relative min-h-screen">
      <Card className="w-[250px] h-fit shrink-0 flex flex-col gap-4 p-4 sticky top-[60px]">
        <Dropdown>
          <DropdownTrigger>
            <Button className="capitalize" variant="bordered">
              Серия
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            className="max-h-[300px] overflow-y-auto"
            disallowEmptySelection
            aria-label="Multiple selection example"
            closeOnSelect={false}
            selectionMode="multiple"
            variant="flat"
          >
            <DropdownSection title="Серия Mavic">
              <DropdownItem key="1">Mavic 1</DropdownItem>
              <DropdownItem key="2">Mavic 2</DropdownItem>
              <DropdownItem key="3">Mavic 3</DropdownItem>
              <DropdownItem key="4">Mavic 4</DropdownItem>
            </DropdownSection>
            <DropdownSection title="Серия Air">
              <DropdownItem key="5">Air 2</DropdownItem>
              <DropdownItem key="6">Air 3</DropdownItem>
              <DropdownItem key="7">Air 4</DropdownItem>
            </DropdownSection>
            <DropdownSection title="Серия Mavic">
              <DropdownItem key="8">Mavic 1</DropdownItem>
              <DropdownItem key="9">Mavic 2</DropdownItem>
              <DropdownItem key="10">Mavic 3</DropdownItem>
              <DropdownItem key="11">Mavic 4</DropdownItem>
            </DropdownSection>
            <DropdownSection title="Серия Air">
              <DropdownItem key="12">Air 2</DropdownItem>
              <DropdownItem key="13">Air 3</DropdownItem>
              <DropdownItem key="14">Air 4</DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>

        <div>
          <div>Стоимость</div>
          <Slider
            className="max-w-sm"
            defaultValue={[0, 200000]}
            formatOptions={{ style: 'currency', currency: 'RUB' }}
            label=" "
            maxValue={200000}
            minValue={0}
            step={10000}
            size="md"
            showSteps={true}
          />
        </div>
      </Card>
      <div className="grow flex flex-col gap-8">
        <div className="flex flex-wrap gap-4">
          {Array.from({ length: 12 }).map((_, idx) => (
            <Card isFooterBlurred className="flex-1 min-w-[calc(33.33%-1rem)] h-fit" key={idx}>
              <Image
                removeWrapper
                alt="Card example background"
                className="z-0 w-full h-full object-cover"
                src="/goods/1.jpg"
              />
              <CardBody className="flex flex-col gap-2">
                <div className="text-xs">Квадрокоптер DJI Mini 4 Pro Fly More Combo Plus (DJI RC 2)</div>
                <div>122.000 ₽</div>
              </CardBody>
            </Card>
          ))}
        </div>
        <Pagination
          showControls
          initialPage={1}
          total={10}
          className="mx-auto"
          radius="sm"
          // showShadow
          variant={'light'}
        />
      </div>
    </div>
  );
}
