import React, { useState }from 'react'
import AllData from "../data/products"


export default function ShopPlace(props) {

    const [ cart, setCart ] = useState([]);
    const [ products ] = useState(AllData)

    const addToCart = (product) => {
        console.log("working well");
        setCart([...cart, product])
}

    return (
        <div className="shop-place-container">
            {products.map((details) => (
                <div className="products-grid" key={details.id}>
                    <div className="products-container">
                        <img src="https://image.freepik.com/foto-gratis/mujer-afroamericana-ropa-moda-festiva-brillante_163305-1790.jpg" height="200px" alt={details.name}/>
                        <h4 >{details.name}</h4>
                        <p>{details.price}</p>
                        <button onClick={() => addToCart()}>
                        Add
                        </button>
                    </div>
                </div>
            )
            )}
        </div>
    )
}

