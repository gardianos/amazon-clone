export const initialState = {
    basket:[],
}

//Selector 
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item)=> item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case "ADD_TO_CARD":
            return{
                ...state,
                basket: [...state.basket, action.item],
            }
            case "REMOVE_FROM_CARD":
                // return {
                //     //remove all items in card with the same id 
                //     ...state,
                //     basket: state.basket.filter(item => item.id !==action.id)
                // }
                const index = state.basket.findIndex(
                    (basketItem) => basketItem.id === action.id
                )
                    let newBasket = [...state.basket]
                    if (index >= 0){
                        newBasket.splice(index,1)
                        
                    }else{
                        console.warn(`Cant remove product (id: ${action.id}) as its not in card!`)
                    }

                    return{
                        ...state,
                        basket: newBasket
                    }

            default:
                return state;
    }
}

export default reducer;