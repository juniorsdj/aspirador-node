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
        aspiradorImg && context.drawImage(aspiradorImg, data.aspirador.x * tamanhoBaseParaTudo, data.aspirador.y * tamanhoBaseParaTudo, tamanhoBaseParaTudo, tamanhoBaseParaTudo);
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
