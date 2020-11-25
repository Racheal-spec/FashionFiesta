import {wears} from '../../Data/wears';
import {home} from '../../Data/home';
import { watches } from '../../Data/watches';
import { bags } from '../../Data/bags';

export const initialState = {
    carts: [],
    wears: wears,
    home: home,
    watches: watches,
    bags: bags,
    user: null   
};


const reducer = (state, action) => {
    
    console.log(action);

    switch (action.type) {
      
        case 'ADD_TO_CART':
           
            return {
                ...state,
                carts: [...state.carts, action.item],
            };

        case 'REMOVE_FROM_CART':

            const index = state.carts.findIndex(
                (cartsItem) => cartsItem.id === action.item.id
            );
            let newCarts = [...state.carts];

            if (index >= 0) {
                newCarts.splice(index, 1)
            } else {
                console.warn(`Can't remove product (id: ${action.item.id}) as it's not in basket!`)
            }

            return {
                ...state, carts: newCarts
            }

   
        default:
            return state;
    }   

};

export default reducer;

