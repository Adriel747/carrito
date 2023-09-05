//import { beforeEach } from "node:test";
import Auto from "./movimiento.js";

let auto
describe("Clase Mover Auto", () =>{
  beforeEach(() => {
    auto = new Auto();
  })

  it("mostrar posicion inicial 0,N", () => {
    expect(auto.mover("")).toEqual("0,0N");
  });
  it("deberia moverse hacia el norte", () => {
    expect(auto.mover("A")).toEqual("0,1N");
  });
  it("deberia cambiar de direccion a la derecha", () => {
    expect(auto.mover("D")).toEqual("0,0E");
  });
  it("deberia cambiar de direccion a la izquierda", () => {
    expect(auto.mover("I")).toEqual("0,0O");
  });

  it("deberia de moverse varios espacios al norte", () =>{
    expect(auto.mover("AA")).toEqual("0,2N")
  })
  it("deberia de moverse varios espacios al este", () =>{
    expect(auto.mover("ADAA")).toEqual("2,1E")
  })
  it("deberia de moverse varios espacios al oeste", () =>{
    expect(auto.mover("AIAA")).toEqual("-2,1O")
  })
  });
