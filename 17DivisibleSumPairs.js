function divisibleSumPairs(n, k, ar) {
    
    let pares= []
    let contador = 0
    for(let index = 0; index < n; index++){
        for(let pair = 0; pair < n; pair++){
            if(pair != index && (ar[index] + ar[pair]) % k === 0) {
                    pares.push([ar[index], ar[pair]])
            }
        }
    }
    contador = pares.length
    
    console.log(pares)
    return contador /2
    
}
console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]))