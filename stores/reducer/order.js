const orderReducer = (state = null, action) => {

    switch(action.type){

        case 'ADD_TO_ORDER':
        return action.orderProduct


        default:
        return state
    }

}

export default orderReducer;