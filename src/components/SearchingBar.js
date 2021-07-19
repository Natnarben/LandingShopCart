import React, { ReactFragment }from 'react'
import { useEffect, useState } from "react";
import AllData from "../data/products"


// fetch("products.json").then(response => response.json{})
export default function SearchingBar() {

    const [ search, setSearch ] = useState("");
    return (
        <div>
            <input type="text" placeholder="Search in all the web" onChange= { event=> {setSearch(event.target.value)} }/>
            {AllData.filter((val) => {
                if (setSearch == "") {
                    return val
                } else if (val.name.toLowerCase().includes(search.toLowerCase())){
                    return val
                }
            }).map((val, key)=> {
                return <div key={key}>
                <p>{val.name}</p>
                </div>
            })}
        </div>
    )
    
    
    /*const [ user, setUser ] = useState([]); 
    const [ tablaUser, setTablaUser ] = useState([]);
    const [ search, setSearch ] = useState("");
    

    const gettingData =  () => {
        AllData.map( (elements) => {
            setUser(elements.data);
            setTablaUser(elements.data);
        })
        return console.log(elements.data);
    }

useEffect(() => {
    gettingData();
}, [])

return (
    <div> { user }</div>
) */
}
