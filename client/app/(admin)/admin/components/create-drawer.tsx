"use client";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";
import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { Input, Textarea } from "@heroui/input";
import { Link } from "@heroui/link";
import { FilePlus } from "lucide-react";
import React from "react";

export default function CreateDrawer({ title }: { title: string }) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Link
          showAnchorIcon
          anchorIcon={<FilePlus size={16} strokeWidth={2} />}
          className="cursor-pointer"
          isBlock
          color="success"
        />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-center">
            Добавление в {title}
          </DrawerTitle>
        </DrawerHeader>
        <Form
          className="flex flex-col gap-3 p-8"
          validationBehavior="native"
          //   onSubmit={handler}
        >
          <Label htmlFor="title">Название</Label>
          <Input
            required
            id="title"
            placeholder="Название серии"
            name="title"
          />
          <Label htmlFor="description">Описание</Label>
          <Textarea
            required
            id="description"
            placeholder="Описание серии"
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
  );
}
