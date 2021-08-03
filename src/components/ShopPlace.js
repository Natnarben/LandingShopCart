import React from 'react'
import Banner from './Banner';
import  { AppProvider, useContextInfo } from "./Context"
import { Link } from "react-router-dom";
import "../css/Navbar.css"
import { CartProducts } from './Product';

export default () => <AppProvider>
    <ShopPlace></ShopPlace>
</AppProvider>

function ShopPlace() {

    const {products, cart, setCart, search, setSearch} = useContextInfo();
    
    const  AddToCart = (product) => {
        console.log(cart.length)
        setCart([...cart, product]) 

    }
    return (
        <div className="app-container">
            <div className="nav-container">
                <nav>
                    <ul>
                        <li><Link to="/shop">SHOP</Link></li>
                        <li><Link to="/instagram">INSTAGRAM</Link></li>
                        <li><Link to="/closet">CLOSET ROOM</Link></li>
                        <li><Link to="/vendedoras">VENDEDORAS</Link></li>
                        <li><Link to="/blog">BLOG</Link></li>
                    </ul>
                    <div>
                        <Link to="/shopping-cart">
                            <button className="btns-app">ir al carro  ({cart.length})</button>
                        </Link>
                    </div>
                    <div className="container-searchingBar">
                        <input type="text" className="searching-bar" placeholder="¿Qué estás buscando?" onChange= {event=> {setSearch(event.target.value)} }/>
                        <svg className="svg-icon" viewBox="0 0 20 20">
                        <path fill="none" d="M18.109,17.776l-3.082-3.081c-0.059-0.059-0.135-0.077-0.211-0.087c1.373-1.38,2.221-3.28,2.221-5.379c0-4.212-3.414-7.626-7.625-7.626c-4.212,0-7.626,3.414-7.626,7.626s3.414,7.627,7.626,7.627c1.918,0,3.665-0.713,5.004-1.882c0.006,0.085,0.033,0.17,0.098,0.234l3.082,3.081c0.143,0.142,0.371,0.142,0.514,0C18.25,18.148,18.25,17.918,18.109,17.776zM9.412,16.13c-3.811,0-6.9-3.089-6.9-6.9c0-3.81,3.089-6.899,6.9-6.899c3.811,0,6.901,3.09,6.901,6.899C16.312,13.041,13.223,16.13,9.412,16.13z"></path>
                        </svg>
                    </div>
                </nav>
            </div>
            <div>
                <Banner /> 
            </div>
            <div className="shop-place-container">
                <div className="grid-container">
                    {products.filter((val) => {
                if (setSearch == "") {
                    return ""
                } else if (val.name.toLowerCase().includes(search.toLowerCase())){
                    return val
                }
                }).map((details) => (
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
                            {details.available === true ? (
                            <>
                                <button className="btns-app" onClick={() =>AddToCart(details)}>
                                    Comprar
                                </button>
                            </>
                            ) : (
                            <>
                                <p>No disponible</p>
                            </>    
                            )}
                            </div>
                        </div>    
                    )
                    )}
                </div>
            </div>
        </div>
    )
}

