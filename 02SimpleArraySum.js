function simpleArraySum(ar) {
    
    let soma = 0
    ar.forEach(num => {soma += num} )
    return soma
}
console.log(simpleArraySum([1,2,3,4,10,11]))