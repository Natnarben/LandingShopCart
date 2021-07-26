import React, { useState, useMemo, createContext } from 'react'
import AllData from "../data/products"


export const AppContext = createContext();

export function AppProvider(props) {
    const [ products ] = useState(AllData);
    const [ cart, setCart ] = useState([]);

    const value = useMemo(() => {
        return ({
            cart,
            setCart,
            products 
        })
    }, [cart, setCart, products])

    
    return <AppContext.Provider value={value} {...props} />

}

export function useContextInfo ()  {
    const context  = React.useContext(AppContext);
    if (!context)  {
        throw new Error("error con userCarInfo CHECK!")
    } 

    return context;
} 