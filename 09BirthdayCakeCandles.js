function birthdayCakeCandles(candles) {
    
    let velaMaisAlta = 0
    let quantidadeVelaAlta = 0

    candles.forEach(candle => {
        if (velaMaisAlta < candle)
        velaMaisAlta = candle
    });

    for(let indexB = 0; indexB < candles.length; indexB++){
        if(velaMaisAlta === candles[indexB])
        quantidadeVelaAlta += 1
    }    
    return quantidadeVelaAlta
}
console.log(birthdayCakeCandles([3, 2, 1, 3]))