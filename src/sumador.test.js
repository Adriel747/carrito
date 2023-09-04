import mover from "./sumador.js";

describe("Sumar", () => {
  it("mostrar posicion inicial 0,N", () => {
    expect(mover(3, 2)).toEqual("0,0N");
  });
});
