// Escribir una función fetchUserName(id, callback) que, usando setTimeout con 1 segundo de demora, llame a callback con 'Ada' si id === 1, o con 'invitado' en cualquier otro caso.
// Llamarla con id = 1 y con id = 2, imprimiendo el resultado en cada callback.
// Agregar un console.log inmediatamente después de cada llamada a fetchUserName y confirmar que se imprime antes que el resultado del callback.


function fetchUserName(id,callback){
    setTimeout(()=>{
      if(id===1){
       callback('Ada'); 
      }
      else
        callback('invitado')
    },1);
}

fetchUserName(1,(name)=> console.log(`Hola ${name}`));
console.log("deberia estar entre la llamada 1 y la 2");
fetchUserName(2,(name)=> console.log(`Hola ${name}`));