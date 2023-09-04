var auto = {
  direccion: "N",
  posx: 0,
  posy: 0
}
function mover(m) {
  if(m == "A")
  auto.posy = auto.posy + 1;

if(m == "D") 
  auto.direccion = "E";
return auto.posx.toString() + ',' + auto.posy.toString() + auto.direccion
}


export default mover;
