// Escribir getPersonaById(id, callback) que simule una consulta a una base de datos (con setTimeout de 1 segundo): si id > 0, invoca callback(null, { id, nombre: 'Pepe' }); si no, invoca callback({ error: true, msg: 'ID inválido' }).
// Escribir un callback procesarPersona(err, res) que loguee el error si existe, o el resultado si no.
// Llamar a getPersonaById con un id válido y con uno inválido, usando procesarPersona en ambos casos.

function getPersonaById(id,callback)
{
    setTimeout(()=>{
        if(id>0)
        {
            callback(null,{id, nombre: 'Pepe'})
        }else{
            callback({error:true, msg: 'ID inválido'})
        }
    },1000)
}

function procesarPersona(err,res){
    if(err)
    {
        console.error('Error:', err.msg)
    }
    else{
        console.log(`bienvenido  ${res.nombre}`);
    }
}

getPersonaById(-1,procesarPersona);

getPersonaById(7,procesarPersona);
