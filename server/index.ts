import dotenv from "dotenv";
import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { Console } from "./utils/Console";
import { Router } from "./Router";

class API {
  constructor() {
    dotenv.config();
    this.useMiddlewares();
    this.useRoutes();
    this.init().then(async () => {
      Console.log(
        "magenta",
        `[API]: Server is running at :${process.env.PORT}`
      );
    });
  }
  private app = new Elysia({ prefix: "/api" });

  private useMiddlewares() {
    this.app.use(cors());
  }
  private useRoutes() {
    this.app.group("/items", (app) => app.use(Router.items));
    this.app.group("/users", (app) => app.use(Router.users));
    this.app.group("/groups", (app) => app.use(Router.groups));
    this.app.group("/series", (app) => app.use(Router.series));
  }
  async init() {
    this.app.listen(process.env.PORT || 5000);
  }
}

new API();
