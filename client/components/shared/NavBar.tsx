'use client';

import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description: 'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description: 'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
];

export function NavBar() {
  const categories = [
    {
      id: 0,
      title: 'Серия Mini',
      subcategories: [
        {
          id: 0,
          title: 'Mini 4 Pro',
        },
        {
          id: 1,
          title: 'Mini 3 Pro',
        },
        {
          id: 2,
          title: 'Mini 4K',
        },
        {
          id: 3,
          title: 'Mini 3',
        },
        {
          id: 4,
          title: 'Mini 2 SE',
        },
        {
          id: 5,
          title: 'Mini 2',
        },
      ],
    },
    {
      id: 1,
      title: 'Серия DJI Neo',
      subcategories: [],
    },
    {
      id: 2,
      title: 'Серия DJI FLIP',
      subcategories: [],
    },
    {
      id: 3,
      title: 'Серия Air',
      subcategories: [
        {
          id: 1,
          title: 'Air 3S',
        },
        {
          id: 2,
          title: 'Air 3',
        },
        {
          id: 3,
          title: 'Air 2S',
        },
        {
          id: 4,
          title: 'Air 2',
        },
      ],
    },
    {
      id: 4,
      title: 'Серия Mavic',
      subcategories: [
        {
          id: 1,
          title: 'Mavic 3 Pro',
        },
        {
          id: 2,
          title: 'Mavic 3 Classic',
        },
        {
          id: 3,
          title: 'Mavic 3',
        },
        {
          id: 4,
          title: 'Mavic 2 Enterprice',
        },
        {
          id: 5,
          title: 'Mavic 3 Enterprice',
        },
      ],
    },
    {
      id: 5,
      title: 'Серия DJI Avata',
      subcategories: [
        {
          id: 1,
          title: 'Avata 2',
        },
        {
          id: 2,
          title: 'Avata',
        },
        {
          id: 3,
          title: 'Goggles',
        },
      ],
    },
    {
      id: 6,
      title: 'Серия FPV DJI',
      subcategories: [],
    },
    {
      id: 7,
      title: 'Серия Inspire',
      subcategories: [
        {
          id: 7,
          title: 'DJI Inspire 3',
        },
      ],
    },
  ];
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {categories.map((i, idx) => (
          <NavigationMenuItem key={idx}>
            <NavigationMenuTrigger>{i.title}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href={'catalog/' + i.id}
                    >
                      {/* <Icons.logo className="h-6 w-6" /> */}
                      <div className="mb-2 mt-4 text-lg font-medium">{i.title}</div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Beautifully designed components built with Radix UI and Tailwind CSS.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                {i.subcategories.map((s, idx) => (
                  <ListItem href="/docs" title={s.title} key={idx}>
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = 'ListItem';
