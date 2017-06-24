//Ejercicio 1
function rectangulo(base, altura){
  this.base  = base;
  this.altura = altura;
}
var elRectangulo = new rectangulo(10, 5);
var areaRectangulo= elRectangulo.base*elRectangulo.altura;

//document.write(areaRectangulo);

//Ejercicio 2
function personaEdad(nombre, dia, mes, annio){
  this.nombre = nombre;
  this.dia = dia;
  this.mes = mes;
  this.annio = annio;
  
  this.calculo = function(){
  var hoyDato = new Date();
  var hoyAnnio = hoyDato.getFullYear();
  var hoyMes = hoyDato.getMonth();
  var hoyDia = hoyDato.getDate();
  var age = hoyAnnio - infoNacimiento.annio;

  if (hoyMes < (infoNacimiento.mes - 1)) {
    age--;
  }
  if (((infoNacimiento.mes - 1) == hoyMes) && (hoyDia < infoNacimiento.dia)) {
    age--;
  }
  return 'La edad actual de '+ infoNacimiento.nombre + ' es ' + age;
  }
}
var infoNacimiento = new personaEdad("Susan", 23, 8, 1997);

//document.write(infoNacimiento.calculo());

//Ejercicio 3

function miPersona(nombre, edad, pasatiempo) {
  this.nombre = nombre;
  this.edad = edad;
  this.pasatiempo = pasatiempo;
}

var infoPersona = new miPersona('Susy', 25, 'cantar');
var obtenerPersona= 'Hola soy '+ infoPersona.nombre + ' tengo ' + infoPersona.edad + ' años y me gusta ' + infoPersona.pasatiempo;
//document.write(obtenerPersona);