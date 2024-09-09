let edad=18
function ValidarEdad(Edad){
    return new Promise((resolve, reject)=>{
        if(Edad >= edad){
            resolve("Edad válida para aceder al contenido.")
        }else{
            reject("Edad insuficiente para acceder al contenido")
        }
    })
}

ValidarEdad(2)
.then(res=>{
    console.log("Mensaje: " + res)
})
.catch(error=>{
    console.log("Mensaje: " + error)
})