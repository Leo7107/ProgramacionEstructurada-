
function SimulaciónCompra(monto){
    return new Promise((resolve, reject)=>{
        if(monto > 0){
            resolve(`Compra completada por ${monto}`)
        }else{
            reject("Monto inválido para la compra.")
        }
    })

}

SimulaciónCompra("0")
.then(res=>{
    console.log(`Mensaje:` +res)
})
.catch(error=>{
    console.log(`Mensaje: ` + error)
})