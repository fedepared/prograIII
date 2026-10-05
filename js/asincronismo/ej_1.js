//1-  Bloquear el hilo (para entenderlo, no para repetirlo)
// Escribir la función blockFor(ms) del apunte (un while que ocupa la CPU durante ms milisegundos).
// Ejecutar console.log('Antes'), blockFor(3000), console.log('Después') en la consola del navegador.
// Mientras corre blockFor, intentar interactuar con la página (scroll, click en algo). Anotar qué se observa.
// Explicar en un comentario, con tus palabras, por qué pasa eso — conectándolo con que JS tiene un solo hilo.

// 2. Call stack, a mano
// Escribir tres funciones multiply(a, b), square(n) (que use multiply) y printSquare(n) (que use square), como en el apunte.
// Llamar a printSquare(5) y confirmar el resultado.
// En un comentario, listar el orden exacto en el que se apilan y desapilan las tres funciones.

function blockFor(ms) {
  const end = Date.now() + ms
  while (Date.now() < end) {
    // ocupa la CPU haciendo nada, a propósito — simula trabajo bloqueante
  }
}

//console.log('Antes del bloqueo')
//blockFor(5000)   // el hilo queda "trabado" acá, 5 segundos completos
// console.log('Después del bloqueo')


// Ejercicio 2

function multiply(a, b) { return a * b }
function square(n) { return multiply(n, n) }
function printSquare(n) { console.log(square(n)) }

printSquare(4);

