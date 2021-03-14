const SocketIo = require('socket.io')
const indexApp = require("./src/index")

let WsInstance

class WsServer {
    static start = async (app) => {
        try {
            if (WsInstance) return WsInstance;

            WsInstance = SocketIo(app);


            WsInstance.on("connection", (socket) => {
                socket.on("start-app", (ambienteSize, qtdLixo, tempoLigado) => {
                    indexApp(ambienteSize, qtdLixo, tempoLigado)
                });
            });
        } catch (error) {
        }
    }

    static emitSomething = async (event, data) => {
        try {
            const result = await WsInstance.emit(event, data);
        } catch (error) {
            console.log(error)
        }
    }
}


module.exports = WsServer