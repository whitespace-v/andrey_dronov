"use client";
import * as React from "react";
import { ChevronRight, File, Folder } from "lucide-react";
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
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Link } from "@heroui/link";
import { RequestBuilder } from "@/lib/RequestBuilder";
import { Group } from "@/types/models";
import CreateDrawer from "./create-drawer";
import DeleteDrawer from "./delete-drawer";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [groups, setGroups] = React.useState<Group[]>([]);

  React.useEffect(() => {
    getGroups();
  }, []);

  const getGroups = async () => {
    const response = await RequestBuilder.$get("/groups/fullfetch", {});
    setGroups(response);
  };

  return (
    <Sidebar {...props}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Товары</SidebarGroupLabel>
          <div className="bg-default-100 rounded-md">
            <CreateDrawer title={"Группы"} task={"groups"} />
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              {groups.map((group) => (
                <SidebarMenuItem key={group.id}>
                  <Collapsible className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90">
                    <CollapsibleTrigger asChild>
                      <div className="flex items-center w-full">
                        <SidebarMenuButton className="flex-1 w-full justify-between ">
                          <div className="flex items-center gap-2">
                            <ChevronRight className="transition-transform" />
                            <Folder size={22} strokeWidth={2} />
                            {group.title}
                          </div>
                          <div className="bg-default-100 rounded-md">
                            <CreateDrawer
                              title={group.title}
                              task={"series"}
                              group_id={group.id}
                            />
                            <DeleteDrawer
                              title={group.title}
                              task={"series"}
                              group_id={group.id}
                            />
                          </div>
                        </SidebarMenuButton>
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {group.series.map((series) => (
                          <SidebarMenuItem key={series.id}>
                            <Collapsible className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90">
                              <CollapsibleTrigger asChild>
                                <div className="flex items-center w-full">
                                  <SidebarMenuButton className="flex-1 w-full justify-between ">
                                    <div className="flex items-center gap-2">
                                      <ChevronRight className="transition-transform" />
                                      <Folder size={22} strokeWidth={2} />
                                      {series.title}
                                    </div>
                                    <div className="bg-default-100 rounded-md">
                                      <CreateDrawer
                                        title={series.title}
                                        series_id={series.id}
                                        group_id={group.id}
                                        task={"items"}
                                      />
                                      <DeleteDrawer
                                        title={series.title}
                                        task={"items"}
                                        series_id={series.id}
                                      />
                                    </div>
                                  </SidebarMenuButton>
                                </div>
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <SidebarMenuSub>
                                  {series.items.map((item, id) => (
                                    <div
                                      className="w-full flex justify-between items-center"
                                      key={id}
                                    >
                                      <Link
                                        className="flex items-center gap-2 ml-1.5"
                                        color="foreground"
                                        href={`/admin/${item.id}`}
                                      >
                                        <File size={16} strokeWidth={1.5} />
                                        {item.title}
                                      </Link>
                                      <DeleteDrawer
                                        title={item.title}
                                        task={"items"}
                                        item_id={item.id}
                                      />
                                    </div>
                                  ))}
                                </SidebarMenuSub>
                              </CollapsibleContent>
                            </Collapsible>
                          </SidebarMenuItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </Collapsible>
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
