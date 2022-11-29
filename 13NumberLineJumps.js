function kangaroo(x1, v1, x2, v2) {
    let start1 = v1
    let start2 = v2
    let yesNo = "NO"

    for(let index = 0; index < 10000; index++){
        start1 += v1
        start2 += v2
        if(start1 === start2){
        yesNo = "YES"
    }
    }
    
    return yesNo
}
console.log(kangaroo(0,2,5,3))