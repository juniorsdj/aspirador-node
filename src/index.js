module.exports = ({ ambienteSize, qtdLixo, tempoLigado }) => {
    const Ambiente = require("./Ambiente.js")
    const Aspirador = require("./Aspirador.js")

    // console.log("ambiente", ambienteSize, "lIxo", qtdLixo, "tempoLigado", tempoLigado)

    const amb = new Ambiente(ambienteSize)
    const asp = new Aspirador("Aspira Turbo 3000", amb)


    amb.sujar(qtdLixo)
    asp.ligar(tempoLigado)

}