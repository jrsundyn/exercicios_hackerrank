function birthday(s, d, m) {
    let sum = 0
    let contador = 0

        for(let index = 0; index <= (s.length - m); index++){
            for(let index2 = 0; index2 < m; index2++){
                sum = sum + s[index + index2]
            }
         if(sum === d){
        contador++
        }
        sum = 0
    }
    return contador
}

    
console.log(birthday([1, 2, 1, 3, 2], 3, 2))  