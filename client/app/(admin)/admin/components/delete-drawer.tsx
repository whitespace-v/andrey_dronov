"use client";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Trash2 } from "lucide-react";
import React from "react";

export default function DeleteDrawer({
  title,
}: {
  title: string;
  task: "group" | "series" | "item";
  id: number;
}) {
  const deleteHandler = async () => {
    // eliminate
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
        >
          Удалить
        </Button>
        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
