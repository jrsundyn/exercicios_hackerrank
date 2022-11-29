function compareTriplets(a, b) {
    let Alice = 0
    let Bob = 0
    for (let c = 0; c < a.length; c++) {
        if (a[c] > b[c]) {
            Alice += 1

        }
        else if (a[c] === b[c]) {


        } else {
            Bob += 1
        }
    }
    return [Alice, Bob]
}
console.log(compareTriplets([5,6,7],[3,6,10]))