"use client";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { RequestBuilder } from "@/lib/RequestBuilder";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Trash2 } from "lucide-react";
import React from "react";

export default function DeleteDrawer({
  title,
  task,
  item_id,
  group_id,
  series_id,
}: {
  title: string;
  task: "groups" | "series" | "items";
  item_id?: number;
  group_id?: number;
  series_id?: number;
}) {
  const deleteHandler = async () => {
    // eliminate
    // await RequestBuilder.$post(`/${task}/delete/${id}`, {});
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Link
          showAnchorIcon
          anchorIcon={<Trash2 size={16} strokeWidth={1.5} />}
          className="cursor-pointer"
          isBlock
          color="danger"
        />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-center">Удалить {title} ?</DrawerTitle>
        </DrawerHeader>
        <Button
          type="submit"
          size="md"
          className="w-full"
          color="danger"
          variant="flat"
          onPress={async () => await deleteHandler()}
        >
          Удалить
        </Button>
        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
