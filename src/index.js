module.exports = () => {
    const Ambiente = require("./Ambiente.js")
    const Aspirador = require("./Aspirador.js")
    const { directions } = require("./helpers")


    const amb = new Ambiente(5)

    // // amb.print()
    amb.sujar(10)
    amb.print(true)

    const asp = new Aspirador("Aspira Turbo 3000", amb)

    asp.print(true)

}