class Auto {
  constructor(){
    Auto.direccion = "N";
    Auto.posx = 0;
    Auto.posy = 0;
}
 mover(movimiento) {
  for(let i=0; i<movimiento.length;i++){
    if(movimiento == "A")
  Auto.posy = Auto.posy + 1;

  if(movimiento == "D") 
    Auto.direccion = "E";

  if(movimiento == "I")
    Auto.direccion = "O";
  }
return Auto.posx.toString() + ',' + Auto.posy.toString() + Auto.direccion
}

}
export default Auto;
