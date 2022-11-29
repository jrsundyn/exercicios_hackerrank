function breakingRecords(scores) {

    
    let highScore = scores[0]
    let lowestScore = scores[0]
    let highRecordBreak = 0
    let lowRecordBreak = 0

    scores.forEach(score => {
        if(highScore < score){
            highScore = score
            highRecordBreak += 1
        }
        if(lowestScore > score){
            lowestScore = score
            lowRecordBreak += 1
            
        }
    
    });
    return [highRecordBreak, lowRecordBreak]
}
console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]))