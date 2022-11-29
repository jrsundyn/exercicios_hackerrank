function bonAppetit(bill, k, b) {
    let sum = 0
    let final = 0
    
    bill.forEach(item => sum += item);

    sum = sum - bill[k] 
    final = sum / 2
    
    if(final === b){
        return "Bon Appetit"
    } else {
        return final - b
    }
   
    

}
console.log(bonAppetit([3, 10, 2, 9], 1, 2 ))