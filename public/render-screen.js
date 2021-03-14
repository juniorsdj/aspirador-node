const tamanhoBaseParaTudo = 200


let aspiradorImg
function renderScreen(screen, data, requestAnimationFrame, tamanho) {
    screen.width = tamanho * tamanhoBaseParaTudo
    screen.height = tamanho * tamanhoBaseParaTudo

    const context = screen.getContext('2d')
    context.fillStyle = 'white'
    context.clearRect(0, 0, tamanhoBaseParaTudo, tamanhoBaseParaTudo)

    data.sujeiras.map((sujeira) => {
        context.fillStyle = '#999'
        context.fillRect(sujeira.x * tamanhoBaseParaTudo, sujeira.y * tamanhoBaseParaTudo, tamanhoBaseParaTudo, tamanhoBaseParaTudo)
    })

    if (data.aspirador) {
        aspiradorImg && context.drawImage(aspiradorImg, data.aspirador.x * tamanhoBaseParaTudo, data.aspirador.y * tamanhoBaseParaTudo, tamanhoBaseParaTudo, tamanhoBaseParaTudo);
    }


    requestAnimationFrame(() => {
        renderScreen(screen, data, requestAnimationFrame, tamanho)
    })
}



function loadAspiradorImg() {
    aspiradorImg = new Image();
    aspiradorImg.src = './assets//aspirador.png';
    aspiradorImg.onload = function () {
        aspiradorImg = aspiradorImg
    }
}
