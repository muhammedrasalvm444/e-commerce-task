import React from 'react'

const CartReducer = (state,action) => {
    if(action?.type==="ADD_TO_CART"){
        let {product,count}=action?.payload;
        console?.log("papapa",product)

    }
  return state
}

export default CartReducer