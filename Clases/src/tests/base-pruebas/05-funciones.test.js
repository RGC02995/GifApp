import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe("pruebas05", () => {
  test("Get user debe retornar un objeto", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();
    expect(testUser).toEqual(user);

    console.log(user);
  });

  test("getUsuario activo debe retornar un objeto", () => {
    const nombre = "raul";

    const user = getUsuarioActivo(nombre);

    expect(user).toEqual({
      uid: "ABC567",
      username: nombre,
    });
  });
  
