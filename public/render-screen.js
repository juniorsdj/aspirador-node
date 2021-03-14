function renderScreen(screen, data, requestAnimationFrame, tamanho) {
    screen.width = tamanho*10
    screen.height = tamanho*10

    const context = screen.getContext('2d')
    context.fillStyle = 'white'
    context.clearRect(0, 0, 10, 10)

    data.sujeiras.map((sujeira) => {
        context.fillStyle = 'black'
        context.fillRect(sujeira.x*10, sujeira.y*10, 10, 10)
    })

    if (data.aspirador) {
        context.fillStyle = '#F0DB4F'
        context.fillRect(data.aspirador.x*10, data.aspirador.y*10, 10, 10)
    }


    requestAnimationFrame(() => {
        renderScreen(screen, data, requestAnimationFrame, tamanho)
    })
}
