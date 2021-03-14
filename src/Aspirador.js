const Posicao = require("./Posicao")
const { directions, iterar, gerarRandom2Valores } = require("./helpers")
const wsService = require("./../wsService")

class Aspirador {
    #name
    #posicao
    #ambiente

    constructor(name, ambiente) {
        this.name = name
        this.ambiente = ambiente
        this.posicao = new Posicao(0, 0)
    }

    print(isWs, hasMap) {
        if (isWs) {
            return wsService.emitSomething('positionAspirador', { x: this.posicao.getX(), y: this.posicao.getY() })
        }
        if (hasMap) {
            iterar(this.ambiente.ambiente, (i, j) => {
                process.stdout.write(`${i === this.posicao.getX() && j === this.posicao.getY() ? "A" : this.ambiente.ambiente[i][j]} `)
            }, true)
            return
        }

        console.log(this.posicao)
    }


    limpar() {
        this.ambiente.limpar(this.posicao.getX(), this.posicao.getY())
    }

    mover(direcao) {
        const positionX = this.posicao.getX()
        const positionY = this.posicao.getY()
        switch (direcao) {
            case directions.ACIMA:
                positionX > 0 && this.posicao.setX(positionX - 1)
                break
            case directions.ABAIXO:
                positionX < (this.ambiente.tamanho - 1) && this.posicao.setX(positionX + 1)
                break
            case directions.ESQUERDA:
                positionY > 0 && this.posicao.setY(positionY - 1)
                break
            case directions.DIREITA:
                positionY < (this.ambiente.tamanho - 1) && this.posicao.setY(positionY + 1)
                break
            default:
                console.log("Direção não encontrada")
        }
        wsService.emitSomething('positionAspirador', { x: this.posicao.getX(), y: this.posicao.getY(), direcao })
    }

    agir() {
        return setInterval(() => {
            const directArr = Object.keys(directions)
            const directionToMove = directArr[gerarRandom2Valores(0, directArr.length)]

            this.limpar()
            this.mover(directionToMove)
        }, 500)
    }

    ligar(tempo) {
        const agindo = this.agir()
        setTimeout(() =>
            clearInterval(agindo), tempo)
    }
}

module.exports = Aspirador