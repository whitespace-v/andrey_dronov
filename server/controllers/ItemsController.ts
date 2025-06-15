import { Pool } from "../utils/Pool";
import { Responder } from "../utils/Responder";
import { v4 as uuidv4 } from "uuid";

export class ItemsController {
  static async groupCreate({
    title,
    image,
    description,
  }: {
    title: string;
    description: string;
    image: File;
  }) {
    try {
      const path = `${uuidv4()}.png`;
      await Bun.write("./static/" + path, image);
      await Pool.conn.group.create({
        data: { title, description, src: path },
      });
      return Responder.ok({});
    } catch (error) {
      console.error("Error", error);
      return Responder.forbidden("Что-то не так");
    }
  }
  static async seriesCreate({
    title,
    image,
    description,
    group_id,
  }: {
    title: string;
    description: string;
    image: File;
    group_id: string;
  }) {
    try {
      const path = `${uuidv4()}.png`;
      await Bun.write("./static/" + path, image);
      await Pool.conn.series.create({
        data: { title, description, src: path, group_id: Number(group_id) },
      });
      return Responder.ok({});
    } catch (error) {
      console.error("Error", error);
      return Responder.forbidden("Что-то не так");
    }
  }
  static async itemsCreate({
    title,
    image,
    description,
    group_id,
    series_id,
  }: {
    title: string;
    description: string;
    image: File[];
    series_id: string;
    group_id: string;
  }) {
    try {
      const item = await Pool.conn.item.create({
        data: {
          title,
          description,
          count: 1,
          price: 1,
          group_id: Number(group_id),
          series_id: Number(series_id),
        },
      });
      for (const el of image) {
        const src = `${uuidv4()}.png`;
        await Bun.write("./static/" + src, el);
        await Pool.conn.itemImage.create({ data: { src, item_id: item.id } });
      }

      return Responder.ok({});
    } catch (error) {
      console.error("Error", error);
      return Responder.forbidden("Что-то не так");
    }
  }
  static async groupsGet() {
    try {
      return await Pool.conn.group.findMany({});
    } catch (error) {
      console.error("Error", error);
      return Responder.forbidden("Что-то не так");
    }
  }
  static async groupsFullFetch() {
    try {
      return await Pool.conn.group.findMany({
        include: {
          series: {
            include: {
              items: true,
            },
          },
        },
      });
    } catch (error) {
      console.error("Error", error);
      return Responder.forbidden("Что-то не так");
    }
  }
  static async deleteItem({ id }: { id: number }) {
    try {
      return await Pool.conn.item.delete({ where: { id } });
    } catch (error) {
      console.error("Error", error);
      return Responder.forbidden("Что-то не так");
    }
  }
  static async deleteSeries({ id }: { id: number }) {
    try {
      return await Pool.conn.series.delete({ where: { id } });
    } catch (error) {
      console.error("Error", error);
      return Responder.forbidden("Что-то не так");
    }
  }
  static async deleteGroup({ id }: { id: number }) {
    try {
      await Pool.conn.group.delete({ where: { id } });

      return Responder.ok({});
    } catch (error) {
      console.error("Error", error);
      return Responder.forbidden("Что-то не так");
    }
  }
  static async getItem({ id }: { id: number }) {
    try {
      const item = await Pool.conn.item.findFirst({
        where: { id },
        include: { images: true, params_tables: true },
      });
      return Responder.ok({ item });
    } catch (error) {
      console.error("Error", error);
      return Responder.forbidden("Что-то не так");
    }
  }
}
