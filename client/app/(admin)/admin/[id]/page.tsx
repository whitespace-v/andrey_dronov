"use client";
import { RequestBuilder } from "@/lib/RequestBuilder";
import { Item } from "@/types/models";
import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { setConfig } from "next/config";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

export default function page() {
  const [item, setItem] = useState<Item>();
  const [data, setData] = useState<
    { title: string; items: [{ key: string; value: string }] }[]
  >([]);
  const params = useParams();

  const getItem = async () => {
    if (params && params.id) {
      const response = await RequestBuilder.$get(
        `/items/fetch/${params.id}`,
        {},
      );
      console.log(response);
      if (response.status === 200) {
        setItem(response.body.item);
      } else {
        toast.info("Что-то пошло не так");
      }
    }
  };
  useEffect(() => {
    getItem();
  }, []);

  const addHandler = () => {
    setData((prev) => [
      ...prev,
      { title: "", items: [{ key: "", value: "" }] },
    ]);
  };

  return (
    <div className="p-4">
      {item?.count}
      <div>
        <Button onPress={() => addHandler()}>Добавить Характеристики</Button>
        <Form>
          {data.map((i, idx) => (
            <div key={idx}>
              <Input placeholder="Характеристика" variant="bordered" />
              <div className="flex">
                <Input variant="bordered" />
                <Input variant="bordered" />
              </div>
            </div>
          ))}
        </Form>
      </div>
    </div>
  );
}
