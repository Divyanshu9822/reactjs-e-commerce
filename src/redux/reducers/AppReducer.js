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

export const categoryReducer = (state = INITIAL_PRODUCT_STATE, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_CATEGORY:
            return { products: payload }

        default:
            return state;
    }
}

// {productId: payload.id, quantity :1}
export const cartReducer = (state = CART_STATE, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, { ...payload, quantity: 1 }]
            }
        case ActionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: [...state.cart.filter((product) => product !== payload)]
            }

        default:
            return state;
    }
}

export const itemCountReducer = (state = CART_STATE, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_ONE:
            return {
                ...state,
                cart: state.cart.map((product) => product.id === payload ? { ...product, quantity: product.quantity + 1 } : product)
            }
        case ActionTypes.SUB_ONE:
            return {
                ...state,
                cart: state.cart.map((product) => product.id === payload ? { ...product, quantity: product.quantity !== 1 ? product.quantity - 1 : 1, } : product)
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