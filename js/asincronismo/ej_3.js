// Escribir tres console.log — uno antes, uno dentro de un setTimeout(fn, 0), y uno después — como en el ejemplo del apunte.
// Antes de ejecutar, predecir el orden de salida en un comentario.
// Ejecutar y confirmar si la predicción fue correcta.
// Repetir el ejercicio, pero esta vez con dos setTimeout distintos: uno con 1000 ms y otro con 500 ms, escritos en ese orden en el código. ¿En qué orden se ejecutan?

console.log("primer cosole");

setTimeout(()=>console.log("segundo cosole"),0)

console.log("tercero cosole");