// const Ambiente = require("./Ambiente.js")
// const Aspirador = require("./Aspirador.js")
// const { directions } = require("./helpers")


// const amb = new Ambiente(3)

// // amb.print()
// // amb.sujar(9)
// // amb.print()

// const asp = new Aspirador("Aspira Turbo 3000", amb)

// asp.print(true)



const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(200, 200)
const ctx = canvas.getContext('2d')


function draw() {
  ctx.font = '30px Impact';
  ctx.rotate(0.1);
  ctx.fillText('Awesome!', 50, 100);

  return canvas
}

module.exports = draw;