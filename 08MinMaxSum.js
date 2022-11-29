function miniMaxSum(arr) {
    let max = arr[0]
    let min = arr[0]
    let soma = 0
    
    for(let contador = 0; contador < arr.length; contador++) {
        if(max < arr[contador]) {
            max = arr[contador]
        }
        if(min > arr[contador]) {
            min = arr[contador]   
        }
        soma += arr[contador]
       
    }
        let somamax = soma - min
        let somamin = soma - max
        return(somamin + " " + somamax)
}
console.log(miniMaxSum([1, 2, 3, 4, 5]))