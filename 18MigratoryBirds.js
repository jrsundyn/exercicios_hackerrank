function migratoryBirds(arr) {
    let passarosVistos = {}

    arr.forEach(passaro => {
        if(!passarosVistos[passaro]) {
            passarosVistos[passaro] = 1
        } else {
            passarosVistos[passaro]++
        }
    });
    console.log(passarosVistos)

    const MaisVisto = Math.max(...Object.values(passarosVistos));
    console.log("mais visto", MaisVisto)
    const passaroMaisVisto = Object.keys(passarosVistos).find((key) => passarosVistos[key] === MaisVisto)
    console.log("passaro mais visto", passaroMaisVisto)
    return passaroMaisVisto
    
}
console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]))