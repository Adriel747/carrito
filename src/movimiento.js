class Auto {
  constructor(){
    Auto.direccion = "N";
    Auto.posx = 0;
    Auto.posy = 0;
}
Direcciones(movimiento){
  if(movimiento == "A"){
    if(Auto.direccion == "N"){
      Auto.posy = Auto.posy + 1;
    }
    else if(Auto.direccion == "E"){
      Auto.posx = Auto.posx + 1;
    }
    else if(Auto.direccion == "O"){
      Auto.posx = Auto.posx - 1;
    }
  }
  if(movimiento == "D"){ 
    Auto.direccion = "E";
  }
  if(movimiento == "I"){
    Auto.direccion = "O";
  }
}
 mover(movimiento) {
  for(let i=0; i<movimiento.length; i++){
    this.Direcciones(movimiento[i])
  }
 return Auto.posx.toString() + ',' + Auto.posy.toString() + Auto.direccion
}

}
export default Auto;
