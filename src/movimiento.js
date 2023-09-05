class Auto {
  constructor(){
    Auto.direccion = "N";
    Auto.posx = 0;
    Auto.posy = 0;
}
Direcciones(movimiento){
  let orientacion = ["O", "N", "E", "S"]
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
    else if(Auto.direccion == "S"){
      Auto.posy = Auto.posy - 1;
    }
  }
  if(movimiento == "D"){ 
    let cambio = orientacion.indexOf(Auto.direccion)
    Auto.direccion = orientacion[cambio + 1];
  }
  if(movimiento == "I"){
    let cambio = orientacion.indexOf(Auto.direccion)
    Auto.direccion = orientacion[cambio - 1];
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
