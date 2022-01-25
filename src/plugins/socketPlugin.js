import socketIO from "socket.io-client";

const socket = socketIO.connect("http://211.38.86.92:8081", {transports: ['websocket']});

const socketPlugin = {

  install(app){
      
    app.config.globalProperties.$connect = () => {
      socket.on('connect', (so) => console.log(so))
    };

    app.config.globalProperties.$foodList = () => {
      socket.emit('/food/list')
    };

    app.config.globalProperties.$foodAdd = ({restaurantId, name, imageUrl, cost}) => {
      socket.emit('/food/create', {
          restaurantId,
          name, 
          imageUrl, 
          cost
      })
    };

    app.config.globalProperties.$foodInfo = ({foodId}) => {
      socket.emit('/food/information', { foodId })
    };

    app.config.globalProperties.$socket = socket;
  }
}

export default socketPlugin;