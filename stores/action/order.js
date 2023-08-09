export const addToOrder = (orderProduct) => {

    return {
        type : 'ADD_TO_ORDER', 
        orderProduct

    }

}

export default {addToOrder};