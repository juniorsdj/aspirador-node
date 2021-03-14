const { iterar } = require("./helpers")
const wsService = require("./../wsService")

const gerarRandom2Valores = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


class Ambiente {
    #ambiente
    tamanho
    constructor(tamanho) {
        this.ambiente = new Array(tamanho)
        this.tamanho = tamanho
        for (let index = 0; index < this.ambiente.length; index++) {
            this.ambiente[index] = new Array(tamanho)

        }

        this.initialize(tamanho)
    }


    initialize(tamanho) {
        iterar(this.ambiente, (i, j) => {
            this.ambiente[i][j] = "L"
        })
    }

    print(isWs) {
        if (isWs) {
            iterar(this.ambiente, (i, j) => {
                this.ambiente[i][j] === "S" && wsService.emitSomething('addSujeira', { x: i, y: j })
            }, true)
        } else {
            iterar(this.ambiente, (i, j) => {
                process.stdout.write(`${this.ambiente[i][j]} `)
            }, true)
            console.log("")
        }
    }




    sujar(qtd) {
        for (let index = 0; index < qtd; index++) {
            const x = gerarRandom2Valores(0, this.ambiente.length)
            const y = gerarRandom2Valores(0, this.ambiente.length)
            this.ambiente[x][y] = "S"
        }

    }

    limpar(x, y) {
        this.ambiente[x][y] = "L"
    }
}

module.exports = Ambiente