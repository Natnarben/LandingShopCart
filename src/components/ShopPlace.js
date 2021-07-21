import React, { useState }from 'react'
import Navbar from './Navbar';
import Banner from './Banner';
import  { AppProvider, useContextInfo } from "./Context"
import '../components/css/Navbar.css';



export default () => <AppProvider>
    <ShopPlace></ShopPlace>
</AppProvider>



function ShopPlace() {

    const {products, cart, setCart} = useContextInfo();


    const  AddToCart = (product) => {
        console.log("adding")
        setCart([...cart, product]) 

    }
    
    return (
        <div className="app-container">
            <div>
                <Navbar /> 
            </div>
            <div>
                <Banner /> 
            </div>
            <div className="shop-place-container">
                {products.map((details) => (  
                    <div className="products-grid" key={details.id}>
                        <div className="products-container">
                            <img src="https://image.freepik.com/foto-gratis/mujer-afroamericana-ropa-moda-festiva-brillante_163305-1790.jpg" height="200px" alt={details.name}/>
                            <h4 >{details.name}</h4>
                            <p>{details.price}</p>
                            <button onClick={() =>AddToCart()}>
                            Add
                            </button>
                        </div>   
                    </div>
            )
            )}
            </div>
        </div>
    )
}

