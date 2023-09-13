import { Elysia, t } from "elysia";

const app = new Elysia()
  .get("/", () => "Hello World")
  .get("/users", () => [{ id: 123, name: "John Doe" }])
  .get("/users/:id", ({ params }) => ({ id: params.id, name: "John Doe" }))
  .post("/users", ({ body }) => body, {
    body: t.Object({
      name: t.String(),
      age: t.Number(),
    }),
  })
  .listen(3000);

console.log(
  `Server is running at ${app.server?.hostname}:${app.server?.port}`
);
