function diagonalDifference(arr) {
    let colunaE = 0
    let colunaD = 0
    for(let contador = 0; contador < arr.length; contador++){
        colunaE += arr[contador][contador]
        colunaD += arr[contador][arr.length - 1 - contador]
    }
    
return Math.abs(colunaE - colunaD)
}
console.log(diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]]))