
const directions = {
    ESQUERDA: "ESQUERDA",
    ACIMA: "ACIMA",
    DIREITA: "DIREITA",
    ABAIXO: "ABAIXO"
}

const iterar = (arr, callback, hasBreakLine) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            callback(i, j)
        }
        hasBreakLine && console.log("")
    }
}

module.exports = { directions, iterar }