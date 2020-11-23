import {combineReducers} from 'redux';

const initialState = {
  basket: [],
  user: null,
  addr: null,
  counter: 1,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const rootReducer = (state = initialState, action) => {
  console.log(state.basket);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.itemData],
      };
    case 'REMOVE_FROM_BASKET':
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id,
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as it is not in the basket!`,
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'EMPTY_BASKET':
      return {
        ...state,
        basket: [],
      };

    case 'REMOVE':
      if (state.counter == 1) {
        return {...state};
      } else {
        return {counter: state.counter - 1};
      }

    case 'ADD':
      return {counter: state.counter + 1};

    default:
      return state;
  }
};

export default rootReducer;
