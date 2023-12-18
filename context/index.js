const { createContext, useContext, useState, useMemo, useReducer } = require("react");
import reducer from "../reducer/cart_reducer"
const AppContext = createContext()
export function AppWrapper({ children }) {
  const initialState={
    cart:[],
    total_amount:"",
    total_items:"",
    shipping_fee:""
  }
  const [state,dispatch]=useReducer(reducer,initialState)
  
    const addToCart=(product,count)=>{
      dispatch({type:"ADD_TO_CART",payload:product,count})

    }
  
    const contextValue = useMemo(
        () => ({
          addToCart,
          ...state
        }),
        [
          addToCart,
          state
        
        ]
      );
    return(
      <AppContext.Provider value={{ ...contextValue }}>
      {children}
    </AppContext.Provider>
    )
}
export function useAppContext() {
  return useContext(AppContext);
}