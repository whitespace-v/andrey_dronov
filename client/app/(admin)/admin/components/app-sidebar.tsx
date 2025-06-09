"use client";
import * as React from "react";
import { ChevronRight, File, FilePlus, Folder, Trash2 } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
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
} from "@/components/ui/sidebar";
import { Link } from "@heroui/link";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@heroui/button";
import { RequestBuilder } from "@/lib/RequestBuilder";
import { Form } from "@heroui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FormRelease } from "@/lib/FormRelease";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { Group, Item, Series } from "@/types/models";

import CreateDrawer from "./create-drawer";
import DeleteDrawer from "./delete-drawer";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [createGroup, setCreateGroup] = React.useState<boolean>(false);
  const [groups, setGroups] = React.useState<Group[]>([]);

  React.useEffect(() => {
    getGroups();
  }, []);

  const getGroups = async () => {
    const response = await RequestBuilder.$get("/items/groups/fullfetch", {});
    setGroups(response);
  };

  const createGroupHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    const data = FormRelease.extract(e);

    const response = await RequestBuilder.$post("/items/groups/create", data, {
      "Content-Type": "multipart/form-data",
    });

    if (response.status !== 200) {
      toast.error(response.response.data.message);
    } else {
      toast.info("Группа создана");
    }
  };

  const createHandler = async () => {};
  const deleteHandler = async () => {};

  return (
    <Sidebar {...props}>
      <SidebarContent>
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
                    <DrawerTitle className="text-center">
                      Добавление Группы
                    </DrawerTitle>
                  </DrawerHeader>
                  <Form
                    className="flex flex-col gap-3 p-8"
                    validationBehavior="native"
                    onSubmit={createGroupHandler}
                  >
                    <Label htmlFor="title">Название</Label>
                    <Input
                      required
                      id="title"
                      placeholder="Название группы"
                      name="title"
                    />
                    <Label htmlFor="description">Описание</Label>
                    <Textarea
                      required
                      id="description"
                      placeholder="Описание группы"
                      name="description"
                    />
                    <Label htmlFor="image">Картинка</Label>
                    <Input name="image" id="image" type="file" />
                    <Button type="submit" size="md" className="w-full">
                      Создать
                    </Button>
                  </Form>
                </DrawerContent>
              </Drawer>
              {groups.map((g) => (
                <SidebarMenuItem key={g.id}>
                  <SidebarMenuItem>
                    <Collapsible className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90">
                      <CollapsibleTrigger asChild>
                        <div className="flex items-center w-full">
                          <SidebarMenuButton className="flex-1 w-full justify-between ">
                            <div className="flex items-center gap-2">
                              <ChevronRight className="transition-transform" />
                              <Folder size={22} strokeWidth={2} />
                              {g.title}
                            </div>
                            <div className="bg-default-100 rounded-md">
                              <CreateDrawer title={g.title} />
                              <DeleteDrawer
                                title={g.title}
                                task={"group"}
                                id={g.id}
                              />
                            </div>
                          </SidebarMenuButton>
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {g.series.map((s) => (
                            <SidebarMenuItem key={s.id}>
                              <SidebarMenuItem>
                                <Collapsible className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90">
                                  <CollapsibleTrigger asChild>
                                    <div className="flex items-center w-full">
                                      <SidebarMenuButton className="flex-1 w-full justify-between ">
                                        <div className="flex items-center gap-2">
                                          <ChevronRight className="transition-transform" />
                                          <Folder size={22} strokeWidth={2} />
                                          {s.title}
                                        </div>
                                      </SidebarMenuButton>
                                    </div>
                                  </CollapsibleTrigger>
                                  <CollapsibleContent>
                                    <SidebarMenuSub>
                                      {s.items.map((i) => (
                                        <div className="w-full flex justify-between items-center">
                                          <div className="flex items-center gap-2 ml-1.5">
                                            <File size={16} strokeWidth={1.5} />
                                            {i.title}
                                          </div>
                                          <Link
                                            showAnchorIcon
                                            anchorIcon={
                                              <Trash2
                                                size={16}
                                                strokeWidth={1.5}
                                              />
                                            }
                                            className="cursor-pointer"
                                            isBlock
                                            color="danger"
                                          />
                                        </div>
                                      ))}
                                    </SidebarMenuSub>
                                  </CollapsibleContent>
                                </Collapsible>
                              </SidebarMenuItem>
                            </SidebarMenuItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

// const createSeriesHandler = async (e: React.FormEvent<HTMLFormElement>) => {
//   const data = FormRelease.extract(e);

//   const response = await RequestBuilder.$post(
//     "/items/series/create",
//     { ...data, group_id: 1 },
//     {
//       "Content-Type": "multipart/form-data",
//     },
//   );

//   if (response.status !== 200) {
//     toast.error(response.response.data.message);
//   } else {
//     toast.info("Группа создана");
//   }
// };

// return (
// <SidebarMenuItem>
//   <Collapsible
//     className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
//     // defaultOpen={name === "components" || name === "ui"}
//   >
//     <CollapsibleTrigger asChild>
//       <div className="flex items-center w-full">
//         <SidebarMenuButton className="flex-1">
//           <ChevronRight className="transition-transform" />
//           <Folder />
//           {name}
// {

// }
//         </SidebarMenuButton>
//       </div>
//     </CollapsibleTrigger>
//     <CollapsibleContent>
//       <SidebarMenuSub>
//         {/* {items.map((subItem, index) => (
//           <Tree
//             key={index}
//             item={subItem}
//             level={level + 1}
//             parentName={name}
//           />
//         ))} */}
//       </SidebarMenuSub>
//     </CollapsibleContent>
//   </Collapsible>
// </SidebarMenuItem>
// );
// }
