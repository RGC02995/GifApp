import { retornaArreglo } from "../../base-pruebas/07-deses-arr";

describe("prueba arreglos", () => {
  test("retorna un arreglo", () => {
    const [letters, numbers] = retornaArreglo();

    expect(typeof letters).toBe("string");
    expect(typeof numbers).toBe("number");

    expect(letters).toEqual(expect.any(String));
  });
});
