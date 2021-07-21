import React, { useState, useEffect }from "react";
import { Link } from "react-router-dom";
import  { AppProvider, useContextInfo } from "./Context"
import SearchingBar from "./SearchingBar";
import "./css/Navbar.css"

export default () => <AppProvider>
     <Navbar></Navbar>
</AppProvider>


function Navbar() { 

    const {cart} = useContextInfo();

    return (
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
                    <Link to="/cart">
                        <button className="cart-btn">ir al carro {cart.length}</button>
                    </Link>
                </div>
                <div>
                    <SearchingBar />
                </div>
            </nav>
        </div>
    )
}
