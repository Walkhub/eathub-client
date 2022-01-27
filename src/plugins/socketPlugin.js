import socketIO from "socket.io-client";

const socket = socketIO.connect("http://211.38.86.92:8081", {transports: ['websocket']});

const isTime = () => {
  let today = new Date();   
  let hour = today.getHours(); 
  return hour > 14 ? 'DINNER' : 'LUNCH'
}

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

    app.config.globalProperties.$reviewList = ({foodId}) => {
      socket.emit('/review/list', {foodId})
    }

    app.config.globalProperties.$reviewAdd = ({foodId, score, content, user}) => {
      socket.emit('/review/create', {
        foodId: foodId,
        score: score,
        userName: user,
        content: content
      })
    }
    
    app.config.globalProperties.$leaveFood = ({foodId}) => {
      socket.emit('/food/sign-out', {
        foodId
      })
    }

    app.config.globalProperties.$optionsList = ({foodId}) => {
      socket.emit('/option/list', {
        foodId
      })
    }

    app.config.globalProperties.$optionAdd = ({foodId, optionName, optionCost}) => {
      socket.emit('/option/create', {
        foodId, optionName, optionCost
      })
    }

    app.config.globalProperties.$userApplication = () => {
      socket.emit('/user/application', {
        applicationType: isTime(),
        userName: localStorage.getItem('name')
      })
    }

    app.config.globalProperties.$allOrderFood = () => {
      socket.emit('/food/application/list', {
        applicationType: isTime()
      })
    }

    app.config.globalProperties.$myOrderFood = () => {
      socket.emit('/food/application/my', {
        userName: localStorage.getItem('name'),
        applicationType: isTime()
      })
    }

    app.config.globalProperties.$orderMenu = (orderList) => {
      socket.emit('/food/application', {
        userName: localStorage.getItem('name'),
        applicationType: isTime(),
        foods: orderList
      })
    }

    app.config.globalProperties.$socket = socket;
  }
}

export default socketPlugin;