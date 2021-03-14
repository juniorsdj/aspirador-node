module.exports = () => {
    const Ambiente = require("./Ambiente.js")
    const Aspirador = require("./Aspirador.js")
    const { directions } = require("./helpers")


    const amb = new Ambiente(10)
    const asp = new Aspirador("Aspira Turbo 3000", amb)
    amb.sujar(40)
    asp.ligar(20000)
    

}