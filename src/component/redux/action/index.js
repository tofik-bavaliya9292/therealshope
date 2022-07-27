// add item to cart
 const addCart = (product) => {
    return{
        type : 'ADDITEM',
        payload : product
    }
}

// delete item from  cart
 export const delCart = (product) => {
    return {
        type: 'DELITEM',
        payload: product
    }
}

export default addCart