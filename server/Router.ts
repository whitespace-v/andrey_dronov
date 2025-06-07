import Elysia, { t } from "elysia";
import { UserController } from "./controllers/UserController";
import { ItemsController } from "./controllers/ItemsController";
import type { BunFile } from "bun";

export class Router {
  static users = new Elysia()
    .post(
      "/signin",
      ({ body: { login, password } }) =>
        UserController.signin({ login, password }),
      {
        body: t.Object({
          login: t.String(),
          password: t.String(),
        }),
      }
    )
    .post(
      "/signup",
      ({ body: { login, password, key } }) =>
        UserController.signup({ login, password, key }),
      {
        body: t.Object({
          login: t.String(),
          password: t.String(),
          key: t.String(),
        }),
      }
    );
  static items = new Elysia()
    .group("/groups", (app) =>
      app.post(
        "/create",
        ({ body: { title, image, description } }) =>
          ItemsController.groupCreate({ title, description, image }),
        {
          body: t.Object({
            title: t.String(),
            description: t.String(),
            image: t.File(),
          }),
        }
      )
    )
    .group("/series", (app) =>
      app.post("/create", () => ItemsController.seriesCreate())
    );
}
