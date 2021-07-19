import React from 'react'
import AllData from "../data/products"

export default function Product() {

    const {products} = AllData;

    return (
        <div>
            <img className="productImage" src={AllData.price} alt={AllData.name}></img>
            <h3>{products.name}</h3>
            <p>{products.price}</p>
            <div>
                <button>Add to cart</button>
            </div>
        </div>
    )
}
