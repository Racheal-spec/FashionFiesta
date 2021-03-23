import {wears} from '../../Data/wears';
import {home} from '../../Data/home';
import {home2} from '../../Data/home';
import {home3} from '../../Data/home';
import { watches } from '../../Data/watches';
import { bags } from '../../Data/bags';

export const initialState = {
    carts: [],
    wears: wears,
    homes: home,
    homes2: home2,
    homes3: home3,
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
           
           let newCarts = [...state.carts];
            const indexVal = state.carts.findIndex(
                (cartsItem) => cartsItem.id === action.id
            );
            if (indexVal >= 0) {
                newCarts.splice(indexVal, 1);
             } else {
                 console.warn(`Can't remove product (id: ${action.id}) as it's not in basket!`);
          }
            return {
                ...state,
                carts: newCarts,
            };
        default:
            return state;
    }   

};

export default reducer;

