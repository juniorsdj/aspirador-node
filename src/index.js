module.exports = () => {
    const Ambiente = require("./Ambiente.js")
    const Aspirador = require("./Aspirador.js")
    const { directions } = require("./helpers")


    const amb = new Ambiente(5)
    const asp = new Aspirador("Aspira Turbo 3000", amb)
    amb.sujar(10)
    amb.print(true)
    asp.print(true)
    

    

}