class Auto {
  constructor(){
    Auto.direccion = "N";
    Auto.posx = 0;
    Auto.posy = 0;
}
Guia(orientacion){
  if(orientacion == "N"){
    Auto.posy += 1;
  }
  else if(orientacion == "S"){
    Auto.posy -= 1;
  }
  else if(orientacion == "E"){
    Auto.posx += 1;
  }
  else if(orientacion == "O"){
    Auto.posx -= 1;
  }
}
Direcciones(movimiento){
  let orientacion = ["O", "N", "E", "S"]
  if(movimiento == "A"){
   this.Guia(Auto.direccion)
  }
  if(movimiento == "D"){ 
    let cambio = orientacion.indexOf(Auto.direccion)
    if(cambio == 3){cambio = -1;}
    Auto.direccion = orientacion[cambio + 1];
  }
  if(movimiento == "I"){
    let cambio = orientacion.indexOf(Auto.direccion)
    if(cambio == 0){cambio = 4;}
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
