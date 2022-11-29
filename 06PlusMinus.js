function plusMinus(arr) {
    let positivo = 0
    let negativo = 0
    let zero = 0
    
    for(let contador = 0; contador < arr.length ; contador += 1) {
        if(arr[contador] > 0) {
            positivo += 1
        } else if(arr[contador] < 0){
            negativo += 1
        } else {
            zero += 1
        }
        
    }
        console.log((positivo / arr.length).toFixed(6))
        console.log((negativo / arr.length).toFixed(6))
        console.log((zero / arr.length).toFixed(6))
}
console.log(plusMinus([-4, 3, -9, 0, 4, 1]))