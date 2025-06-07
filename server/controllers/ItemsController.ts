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
  static async seriesCreate() {}
}
