function staircase(n) {
    let symbol = "#"
    let inputline = ""
    let inputpostion = n - 1
    for (let line = 0; line < n; line++) {
        for (let colum = 0; colum < n; colum++) {
            if (colum < inputpostion) {
                inputline += " "
            } else {
                inputline += symbol
            }
        }
        console.log(inputline)
        inputline = ""
        inputpostion -= 1
    }
}
console.log(staircase(9))