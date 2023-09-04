import mover from "./sumador.js";

describe("Sumar", () => {
  it("mostrar posicion inicial 0,N", () => {
    expect(mover(3, 2)).toEqual("0,0N");
  });
});
  describe("Mover Auto Norte", () => {
    it("deberia moverse hacia el norte", () => {
      expect(mover("A")).toEqual("0,1N");
    });
  
  });
  describe("Mover Auto Derecha Este", () => {
    it("deberia cambiar de direccion a la derecha", () => {
      expect(mover("D")).toEqual("0,1E");
    });
  
  });
  describe("Mover Auto Isquierda Oeste", () => {
    it("deberia cambiar de direccion a la izquierda", () => {
      expect(mover("I")).toEqual("0,1O");
    });
  });
