function renderScreen(screen, data, requestAnimationFrame) {


    const context = screen.getContext('2d')
    context.fillStyle = 'white'
    context.clearRect(0, 0, 10, 10)

    data.sujeiras.map((sujeira) => {
        console.log(sujeira)
        context.fillStyle = 'black'
        context.fillRect(sujeira.x, sujeira.y, 1, 1)
    })

    if (data.aspirador) {
        context.fillStyle = '#F0DB4F'
        context.fillRect(data.aspirador.x, data.aspirador.y, 1, 1)
    }


    requestAnimationFrame(() => {
        renderScreen(screen, data, requestAnimationFrame)
    })
}
