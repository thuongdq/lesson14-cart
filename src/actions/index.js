import * as Types from './../constants/ActionType';
export const addToCart = (product, quantity) => {
    return {
        type: Types.ADD_TO_CART,
        product,
        quantity
    };
}

export const actRemoveProductInCart = (product) => {
    return {
        type: Types.DELETE_PRODUCT_INCART,
        product
    }
}

export const actUpdateProductInCart = (product, quantity) => {
    return {
        type: Types.UPDATE_PRODUCT_INCART,
        product,
        quantity
    }
}

export const actChangeMessage = (message) => {
    return {
        type: Types.CHANGE_MESSAGE,
        message
    }
}
