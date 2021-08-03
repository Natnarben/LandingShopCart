import React, { useState, useMemo, createContext, useContext } from 'react'
import AllData from "../data/products"


export const AppContext = createContext();

export function AppProvider(props) {

    const [ products ] = useState(AllData);
    const [ cart, setCart ] = useState([]);
    const [ search, setSearch ] = useState("");


    const value = useMemo(() => {
        return ({
            cart,
            setCart,
            products,
            search,
            setSearch  
        })
    }, [cart, setCart, setSearch, search])


    return <AppContext.Provider value={value} {...props}/>

}

export function useContextInfo ()  {
    const context  = React.useContext(AppContext);
    if (!context)  {
        throw new Error("CHECK!")
    } 

    return context;
} 