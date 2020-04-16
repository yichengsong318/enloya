import {
    MODIFY_CART,
    EMPTY_CART
} from '../actions';

const INIT_STATE = {
	cartServices: localStorage.getItem('cart_services') ? JSON.parse(localStorage.getItem('cart_services')) : []
};

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case MODIFY_CART:
		return { ...state, cartServices: action.payload};

		case EMPTY_CART:
		return { ...state, cartServices: []};

		default: return { ...state };
	}
}