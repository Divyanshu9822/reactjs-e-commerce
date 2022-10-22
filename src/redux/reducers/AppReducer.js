import ActionTypes from "../constants/ActionTypes";

const INITIAL_PRODUCT_STATE = {
    products: [],
}
const CART_STATE = {
    cart: []
}

export const productsReducer = (state = INITIAL_PRODUCT_STATE, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: payload
            }

        default:
            return state;
    }
}

export const cartReducer = (state = CART_STATE, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_TO_CART:
            const item = state.cart.find(
                product => product.id === payload.id,
            );
            if (item) {
                return {
                    ...state,
                    cart: state.cart.map(item => item.id === payload.id
                        ? {
                            ...item,
                            quantity: item.quantity + 1,
                        }
                        : item
                    )
                };
            }
            return {
                ...state,
                cart: [...state.cart, { ...payload, quantity: 1 }]
            };

        case ActionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: [...state.cart.filter((product) => product !== payload)]
            }
        case ActionTypes.ADD_ONE:
            return {
                ...state,
                cart: state.cart.map(product =>
                    product.id === payload.id
                        ? {
                            ...product,
                            quantity: product.quantity + 1,
                        } : product
                )
            };
        case ActionTypes.SUB_ONE:
            return {
                ...state,
                cart: state.cart.map((product) =>
                    product.id === payload.id
                        ? {
                            ...product,
                            quantity: product.quantity !== 1
                                ? product.quantity - 1 : 1,
                        } : product
                )
            }
        default:
            return state;
    }
}


export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload }

        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}

        default:
            return state;
    }
}