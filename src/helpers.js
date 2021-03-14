
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

const gerarRandom2Valores = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


module.exports = { directions, iterar, gerarRandom2Valores }