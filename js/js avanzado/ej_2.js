

function timer(seconds){
    this.seconds = seconds;
    //no funciona ya que setTimeout tiene su propio contexto de this, por lo que no se puede acceder a la variable seconds
    setTimeout(function(){
        console.log("funcion tradicional: "+ this.seconds);
    },100)
    //funcion flecha, funciona ya que las funciones flecha no tienen su propio contexto de this, por lo que se puede acceder a la variable seconds
    setTimeout(() => console.log("funcion flecha: "+ this.seconds),100)
}

timer(50);

