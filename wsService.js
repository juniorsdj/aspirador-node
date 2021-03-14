// @flow


const SocketIo = require('socket.io')


let WsInstance

class WsServer {
    static start = async (app) => {
        try {
            if (WsInstance) return WsInstance;

            WsInstance = SocketIo(app);

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