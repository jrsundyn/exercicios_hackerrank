/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let countApples = 0
    let countOranges = 0
    let positionApple = 0
    let positionOrange = 0

    apples.forEach(apple => {
        positionApple = a + apple
        if(positionApple >= s && positionApple <= t) {
            countApples += 1
            
        }   
    });
    oranges.forEach(orange => {
        positionOrange = b + orange
        if(positionOrange >= s && positionOrange <= t) {
            countOranges += 1
        }
    })
    console.log(countApples)
    console.log(countOranges)




}

console.log(countApplesAndOranges(5, 15, 3, 2, [-2, 2, -1],[5, -6]))
  