// Escribir el ejemplo del apunte con cinco líneas: console.log('A'), setTimeout(() => console.log('B'), 0), console.log('C'), setTimeout(() => console.log('D'), 0), console.log('E').
// Antes de ejecutar, escribir en comentarios los siete pasos del razonamiento (qué se apila, qué se delega, qué queda encolado y cuándo) — no solo el resultado final.
// Ejecutar y confirmar el orden real de salida.
// Modificar el ejemplo agregando un tercer setTimeout(() => console.log('F'), 0) entre 'C' y 'D'. Volver a predecir el orden completo antes de ejecutar.

console.log('A');
setTimeout(() => console.log('B'), 0);
console.log('C'); 
setTimeout(() => console.log('D'), 0); 
console.log('E')