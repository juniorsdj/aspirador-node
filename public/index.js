function createConfig() {
    const state = {
        aspirador: {},
        sujeiras: [],
        // aspirador: {x: 0, y: 0, angleInDegree: 180},
        // sujeiras: [{ x: 0, y: 0 }, { x: 0, y: 2 }],
        screen: {
            width: 10,
            height: 10
        }
    }

    function addSujeira(sujeira) {
        state.sujeiras.push({
            x: sujeira.x,
            y: sujeira.y
        })
    }
    function limparSujeira(sujeira) {
        state.sujeiras = state.sujeiras.filter(item => item.x !== sujeira.x || item.y !== sujeira.y)
    }

    function changePositionAspirador(x, y, direcao) {
        state.aspirador.x = x
        state.aspirador.y = y
        switch (direcao) {
            case "ESQUERDA":
                state.aspirador.angleInDegree = 270
                break
            case "DIREITA":
                state.aspirador.angleInDegree = 90
                break
            case "ACIMA":
                state.aspirador.angleInDegree = 0
                break
            case "ABAIXO":
                state.aspirador.angleInDegree = 180
                break
        }
    }

    return {
        changePositionAspirador,
        addSujeira,
        limparSujeira,
        state
    }
}
