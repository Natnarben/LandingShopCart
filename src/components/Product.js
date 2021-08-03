import React from 'react'
import  { AppProvider, useContextInfo } from "./Context"

export default () => <AppProvider>
    <CartProducts></CartProducts>
</AppProvider>

export function CartProducts(props) {

    const { cart } = useContextInfo();
    console.log(cart);

    return (
        <div>
            {/* {cart.map((details) => (
                <div className="grid-products" key={details.id}>
                    <img src="https://image.freepik.com/foto-gratis/mujer-afroamericana-ropa-moda-festiva-brillante_163305-1790.jpg" height="200px" alt={details.name}/>
                    <div className="details">
                        <h3>{details.name}</h3>
                        <p className="xs"> <span> XS </span></p>                             
                    </div>
                    <div className="details">
                        <h4>{details.name}</h4>
                        <p>{details.price}</p>
                                
                    </div >
                    <div className="details-pic">
                        <img className="profile-pic" src="https://blogmujeres.com/wp-content/uploads/2016/06/bikinis-victoria-secret-2016.jpg" height="30" alt="profile.picture" />
                    </div>
                    <div className="details">
                        <button>Eliminar</button>
                    </div>
                </div>    
            )
            )} */}
            <h1>hello world</h1>
        </div>
    )
}
