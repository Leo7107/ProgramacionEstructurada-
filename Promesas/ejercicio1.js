let num=5
function ValidarNumero(numero){
    return new Promise((resolve, reject)=>{
        if(numero==num){
            resolve("El número es 5")
        }else{
            reject("El número no es 5")
        } 
    })
}

ValidarNumero(num)
.then(res=>{
    console.log(res)
})
.catch(error=>{
    console.log(error)
})