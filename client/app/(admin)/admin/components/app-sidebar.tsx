'use client';
import * as React from 'react';
import { ChevronRight, File, FilePlus, Folder, Trash2 } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarRail,
} from '@/components/ui/sidebar';
import { Link } from '@heroui/link';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '@heroui/button';
import { RequestBuilder } from '@/lib/RequestBuilder';
import { Form } from '@heroui/form';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { FormRelease } from '@/lib/FormRelease';
import { toast } from 'sonner';
import { Textarea } from '@/components/ui/textarea';

const data = {
  changes: [
    {
      file: 'README.md',
      state: 'M',
    },
    {
      file: 'api/hello/route.ts',
      state: 'U',
    },
    {
      file: 'app/layout.tsx',
      state: 'M',
    },
  ],
  tree: [
    ['Mini', ['Mini 5', 'Mini 5 Pro', 'Mini 5 Mega']],
    ['Max', ['Max 5', 'Max 5 Pro', 'Max 5 Mega']],
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [createGroup, setCreateGroup] = React.useState<boolean>(false);

  const createGroupHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    const data = FormRelease.extract(e);

    const response = await RequestBuilder.$post('/items/groups/create', data, {
      'Content-Type': 'multipart/form-data',
    });

    if (response.status !== 200) {
      toast.error(response.response.data.message);
    } else {
      toast.info('Группа создана');
    }
  };

  return (
    <Sidebar {...props}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Changes</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.changes.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton>
                    <File />
                    {item.file}
                  </SidebarMenuButton>
                  <SidebarMenuBadge>{item.state}</SidebarMenuBadge>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Товары</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <Drawer open={createGroup} onOpenChange={setCreateGroup}>
                <DrawerTrigger asChild>
                  <Link
                    showAnchorIcon
                    anchorIcon={<FilePlus size={22} strokeWidth={2} />}
                    className="cursor-pointer"
                    isBlock
                    color="success"
                  />
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle className="text-center">Добавление Группы</DrawerTitle>
                  </DrawerHeader>
                  <Form className="flex flex-col gap-3 p-8" validationBehavior="native" onSubmit={createGroupHandler}>
                    <Label htmlFor="title">Название</Label>
                    <Input required id="title" placeholder="Название группы" name="title" />
                    <Label htmlFor="description">Описание</Label>
                    <Textarea required id="description" placeholder="Описание группы" name="description" />
                    <Label htmlFor="image">Картинка</Label>
                    <Input name="image" id="image" type="file" />
                    <Button type="submit" size="md" className="w-full">
                      Создать
                    </Button>
                  </Form>
                </DrawerContent>
              </Drawer>

              {data.tree.map((item, index) => (
                <Tree key={index} item={item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

function Tree({ item, level = 0, parentName = '' }: { item: string | any[]; level?: number; parentName?: string }) {
  const [name, ...items] = Array.isArray(item) ? item : [item];
  const [createSeries, setCreateSeries] = React.useState<boolean>(false);
  const [createItem, setCreateItem] = React.useState<boolean>(false);

  if (!items.length) {
    return (
      <SidebarMenuButton
        isActive={name === 'button.tsx'}
        className="data-[active=true]:bg-transparent w-full flex justify-between items-center"
      >
        <span className="flex items-center">
          <File />
          {name}
        </span>
        <Link
          showAnchorIcon
          anchorIcon={<Trash2 size={22} strokeWidth={2} />}
          className="cursor-pointer"
          isBlock
          color="danger"
        />
      </SidebarMenuButton>
    );
  }

  return (
    <SidebarMenuItem>
      <Collapsible
        className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
        defaultOpen={name === 'components' || name === 'ui'}
      >
        <CollapsibleTrigger asChild>
          <div className="flex items-center w-full">
            <SidebarMenuButton className="flex-1">
              <ChevronRight className="transition-transform" />
              <Folder />
              {name}
              <Drawer
                open={level == 2 ? createSeries : createItem}
                onOpenChange={level == 2 ? setCreateSeries : setCreateItem}
              >
                <DrawerTrigger asChild>
                  <Link
                    showAnchorIcon
                    anchorIcon={<FilePlus size={22} strokeWidth={2} />}
                    className="cursor-pointer"
                    isBlock
                    color="success"
                  />
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Are you absolutely sure? {createItem.toString()}</DrawerTitle>
                    <DrawerDescription>This action cannot be undone.</DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter>
                    <Button>Submit</Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </SidebarMenuButton>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {items.map((subItem, index) => (
              <Tree key={index} item={subItem} level={level + 1} parentName={name} />
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  );
}
