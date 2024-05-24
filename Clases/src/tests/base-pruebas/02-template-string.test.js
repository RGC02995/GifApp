import { getSaludo } from "../../base-pruebas/02-template-string";

describe("Test del template string", () => {
  test("Debe devolver hola...", () => {
    const name = "Fernando";
    const message = getSaludo(name);

    expect(message).toBe(`Hola ${name}`);
  });
});
