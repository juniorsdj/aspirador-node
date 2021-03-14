const tamanhoBaseParaTudo = 200


let aspiradorImg
let lixoImg

function renderScreen(screen, data, requestAnimationFrame, tamanho) {
    screen.width = tamanho * tamanhoBaseParaTudo
    screen.height = tamanho * tamanhoBaseParaTudo

    const context = screen.getContext('2d')
    context.fillStyle = 'white'
    context.clearRect(0, 0, tamanhoBaseParaTudo, tamanhoBaseParaTudo)

    data.sujeiras.map((sujeira) => {
        lixoImg && context.drawImage(lixoImg, sujeira.x * tamanhoBaseParaTudo, sujeira.y * tamanhoBaseParaTudo, tamanhoBaseParaTudo, tamanhoBaseParaTudo)
    })

    if (data.aspirador) {
        
        aspiradorImg && context.drawImage(drawRotated(data.aspirador.angleInDegree, aspiradorImg), data.aspirador.x * tamanhoBaseParaTudo, data.aspirador.y * tamanhoBaseParaTudo, tamanhoBaseParaTudo, tamanhoBaseParaTudo);
    }


    requestAnimationFrame(() => {
        renderScreen(screen, data, requestAnimationFrame, tamanho)
    })
}



function loadImages() {
    aspiradorImg = new Image();
    aspiradorImg.src = './assets//aspirador.png';
    aspiradorImg.onload = function () {
        aspiradorImg = aspiradorImg
    }
    lixoImg = new Image();
    lixoImg.src = './assets//trash.png';
    lixoImg.onload = function () {
        lixoImg = lixoImg
    }
}


function drawRotated(degrees, image) {

    const newScreen = document.createElement('canvas')
    newScreen.width = tamanhoBaseParaTudo
    newScreen.height = tamanhoBaseParaTudo
    const context = newScreen.getContext('2d')
    context.clearRect(0, 0, newScreen.width, newScreen.height);

    // save the unrotated context of the canvas so we can restore it later
    // the alternative is to untranslate & unrotate after drawing
    context.save();

    // move to the center of the canvas
    context.translate(newScreen.width / 2, newScreen.height / 2);

    // rotate the canvas to the specified degrees
    context.rotate(degrees * Math.PI / 180);

    // draw the image
    // since the context is rotated, the image will be rotated also
    context.drawImage(image, -image.width / 2, -image.width / 2, tamanhoBaseParaTudo, tamanhoBaseParaTudo);

    // we’re done with the rotating so restore the unrotated context
    context.restore();
    return newScreen
}