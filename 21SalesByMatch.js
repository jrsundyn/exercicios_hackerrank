function sockMerchant(n, ar) {
    
    let pares = {}
    quantidadePares = 0
    ar.forEach(par => {
        if(!pares[par]) {
            pares[par] = 1
        } else {
            pares[par] += 1
        }
        
    });
    console.log(pares)
    Object.keys(pares).forEach(function(par){
        if(pares[par] >= 2){
            quantidadePares += Math.floor(pares[par]/2)
        }
    })

    return quantidadePares
    
        
    
    
} 
console.log(sockMerchant(9,[10, 20, 20, 10, 10, 30, 50, 10, 20]))