let nombre = prompt ('Ingresa tu nombre, sino sos pollo ')
if ((nombre== 'Nahuel') || (nombre == 'Santino'))
{
    alert ('Bienvenido mi lidel ')
}else{
    alert ('Bienvenido')
}
//Punto 2
let edad = prompt('Ingresa tu edad wachin ')
if (edad >= 18)
{
    alert ('Sos mayor de edad')
}else{
    alert ('Sos menor de edad')
}
//Punto 3
function edades(x) {
    x = prompt('Ingrese su otra edad bro ')
    if (x >= 60){
        alert ('Acaso eres un anciano?')
    }
    else if(x >= 27){
        alert ('Acaso eres un adulto?')
}
     else if(x >= 19){
         alert('Acaso eres joven?')
     }
    
else if(x >= 12){
    alert('Acaso eres un adolescente?')
}


else if (x >= 6)
{
    alert('Acaso eres un niño?')
}}
//Punto 4
function laburar(x){
x = prompt('Ingrese un dia de semana estimado')

if ((x == 'sabado') || (x == 'domingo')){
    alert(x + (' es fin de semana bro'))
}
else if ((x == 'lunes') || (x == 'martes') || (x == 'miercoles') || (x == 'jueves') || (x == 'viernes')){
    alert(x + ' es un dia de laburo')
}
}
//Punto 5
function contraseña(x){
    x = prompt('Ingrese una contraseña')

    if ((x == 'secreto')){
    alert('Acceso concedido')
}
else{
    alert('Acceso denegado')
}}
//Punto 6
function multiplo(numero) {
    numero = prompt('Ingrese un numero mi señor')
    if (numero % 5 == 0) {
      alert('Si es multiplo de 5')
    } else {
      alert('Proba con otro BELLIGOLL')
    }
  }
  //Punto 7
  function descuentos(x) {
   x = prompt('Ingresa tu edad y veremos si hay descuento')
    if (x >= 65) {
      // Si la persona es mayor de 65 años, aplica un 10% de descuento.
      var descuento = x * 0.10;
      var precioConDescuento = x - descuento;
      alert('Tenes un 10% de descuento');
    } else {
      // Si la persona no es mayor de 65 años, no aplica ningún descuento.
      alert('No tenes descuento');
    }
  }
  //Punto 8
  function categorizarNota(calificacion) {
    calificacion = prompt('Ingresa la nota que te sacaste')
    if (calificacion >= 80 && calificacion <= 100) {
      alert('MS (Muy Satisfactorio)');
    } else if (calificacion >= 60 && calificacion < 80) {
    alert("S (Satisfactorio)");
    } else if (calificacion < 60) {
      alert('EP (En Proceso)');
    } 
  }
  //Punto 9
  function obtenerDiaDeLaSemana(numero) {
    numero = prompt('Ingresa un numerin (entre el 1 y 7) y te vamos a decir que dia es')
    switch (numero) {
      case 1:
        alert("Es lunes");
      case 2:
        alert("Es martes");
      case 3:
        alert("Es miércoles");
      case 4:
        alert("Es jueves");
      case 5:
        alert("Es viernes") ;
    case 6:
        alert("Es sabado");
      case 7:
        alert("Es domingo");
    }
  }
  //Punto 10
  function esBisiesto(x) {
    x = prompt('Ingresa un año bro')
    if ((x % 400 === 0) || (x % 4 === 0 && x % 100 !== 0)) {
      alert('El año elegido es bisiesto');
    } else {
      alert('El año elegido no es bisisesto');
    }
  }
  //Punto 11
  function cadenas(cadena1, cadena2) {
    cadena1 = prompt('Ingrese su primera palabra')
    cadena2 = prompt('Ingrese su segunda palabra')
    if (cadena1 === cadena2) {
      alert("Las cadenas son iguales.");
    } else {
      alert("Las cadenas son diferentes.");
    }
  }
  //Punto 12
  function calcularEdad(anioNacimiento) {
    anioNacimiento = prompt('Ingrese su año de nacimiento')
    var fechaActual = new Date();
    var anioActual = fechaActual.getFullYear();
    var edad = anioActual - anioNacimiento;
    alert(anioActual - anioNacimiento)
    return edad
  }
  