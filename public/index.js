function createConfig() {
    const state = {
        aspirador: {},
        sujeiras: [],
        // aspirador: {x: 0, y: 0},
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

    function changePositionAspirador(x, y) {
        state.aspirador.x = x
        state.aspirador.y = y
    }

    return {
        changePositionAspirador,
        addSujeira,
        limparSujeira,
        state
    }
}
