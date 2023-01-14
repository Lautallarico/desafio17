const randomNumbers = (cant) => {

    const numbers = {}

    for (let i = 0; i < cant; i++) {
        const randomNumber = Math.floor(Math.random() * 1000 + 1)
        console.log(randomNumber);
        if (numbers[randomNumber]) {
            numbers[randomNumber]++
        } else {
            numbers[randomNumber] = 1
        }
    }

    return numbers
}


process.on('message', (cant) => {
    const objRandomNumbers = randomNumbers(cant)
    process.send(objRandomNumbers)
})

