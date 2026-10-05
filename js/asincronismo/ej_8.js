// Escribir tres funciones simuladas con callback: fetchUser(id, cb), fetchOrders(userId, cb) y fetchOrderCount(orderId, cb) — cada una con un setTimeout corto y un resultado inventado cualquiera.
// Encadenarlas anidando los callbacks: llamar a fetchUser, dentro de su callback llamar a fetchOrders con el id del usuario, y dentro de ese callback llamar a fetchOrderCount con el primer pedido.
// Contar cuántos niveles de indentación tiene el resultado final.
// En un comentario, escribir qué pasaría si cada una de las tres funciones pudiera fallar y hubiera que manejar el error en cada nivel por separado.

function fetchUser(id, cb) {
  setTimeout(() => {
    cb({ id: id, nombre: 'Ana' });
  }, 200);
}

function fetchOrders(userId,cb){
    setTimeout(()=>{
        cb([{id:101,producto:'Teclado'},{id:102,producto:'Mouse'}])
    })
}

function fetchOrderCount(orderId,cb){
    setTimeout(()=>{
        cb(3)
    })
}

fetchUser(1,(user)=>{
    fetchOrders(user.id, (orders)=>{
        fetchOrderCount(orders[0].id, (count)=>{
            console.log(`cantidad de ordenes: ${count}`)
        })
    })
})