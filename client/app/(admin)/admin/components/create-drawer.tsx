"use client";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";
import { FormRelease } from "@/lib/FormRelease";
import { RequestBuilder } from "@/lib/RequestBuilder";
import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { Input, Textarea } from "@heroui/input";
import { Link } from "@heroui/link";
import { FilePlus } from "lucide-react";
import React from "react";
import { toast } from "sonner";

export default function CreateDrawer({
  title,
  task,
  group_id,
  series_id,
}: {
  title: string;
  task: "groups" | "series" | "items";
  group_id?: number;
  series_id?: number;
}) {
  const createHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    const data = FormRelease.extract(e);
    group_id && data.append("group_id", group_id.toString());
    series_id && data.append("series_id", series_id.toString());
    const response = await RequestBuilder.$post(`/${task}/create`, data, {
      "Content-Type": "multipart/form-data",
    });
    console.log(data);

    if (response.status !== 200) {
      toast.error(response.response.data.message);
    } else {
      toast.info(`${task} создано`);
    }
  };

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
            Добавление
            {task === "groups" && ` группы`}
            {task === "series" && ` серии в группу ${title}`}
            {task === "items" && ` позиции в серию ${title}`}
          </DrawerTitle>
        </DrawerHeader>
        <Form
          className="flex flex-col gap-3 p-8"
          validationBehavior="native"
          onSubmit={createHandler}
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
          <Input
            name="image"
            id="image"
            type="file"
            multiple={task === "items"}
          />

          <Button type="submit" size="md" className="w-full">
            Создать
          </Button>
        </Form>
      </DrawerContent>
    </Drawer>
  );
}
