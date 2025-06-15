import Elysia, { t } from "elysia";
import { UserController } from "./controllers/UserController";
import { ItemsController } from "./controllers/ItemsController";

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
  static groups = new Elysia()
    .post(
      "/delete/:id",
      ({ params: { id } }) => ItemsController.deleteItem({ id }),
      {
        params: t.Object({
          id: t.Number(),
        }),
      }
    )
    .post(
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
    .get("/fetch", () => ItemsController.groupsGet())
    .get("/fullfetch", () => ItemsController.groupsFullFetch());

  static series = new Elysia()
    .post(
      "/create",
      ({ body: { title, image, description, group_id } }) =>
        ItemsController.seriesCreate({ title, image, description, group_id }),
      {
        body: t.Object({
          title: t.String(),
          image: t.File(),
          group_id: t.String(),
          description: t.String(),
        }),
      }
    )
    .post(
      "/delete/:id",
      ({ params: { id } }) => ItemsController.deleteItem({ id }),
      {
        params: t.Object({
          id: t.Number(),
        }),
      }
    );

  static items = new Elysia()
    .post(
      "/create",
      ({ body: { title, image, description, series_id, group_id } }) =>
        ItemsController.itemsCreate({
          title,
          image,
          description,
          series_id,
          group_id,
        }),
      {
        body: t.Object({
          title: t.String(),
          image: t.Files(),
          group_id: t.String(),
          series_id: t.String(),
          description: t.String(),
        }),
      }
    )
    .post(
      "/delete/:id",
      ({ params: { id } }) => ItemsController.deleteItem({ id }),
      {
        params: t.Object({
          id: t.Number(),
        }),
      }
    )
    .get(
      "/fetch/:id",
      ({ params: { id } }) => ItemsController.getItem({ id }),
      {
        params: t.Object({
          id: t.Number(),
        }),
      }
    );
}
