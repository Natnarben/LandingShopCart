import React from 'react'
import { Link } from "react-router-dom";
import "./css/Navbar.css"
import SearchingBar from './SearchingBar';
import ShopPlace from './ShopPlace';

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/shop">SHOP</Link></li>
                <li><Link to="/instagram">INSTAGRAM</Link></li>
                <li><Link to="/closet">CLOSET ROOM</Link></li>
                <li><Link to="/vendedoras">VENDEDORAS</Link></li>
                <li><Link to="/blog">BLOG</Link></li>
            </ul>
            <div>
                <span>({})</span>
                <Link to="/cart">
                    <h4>CARRO</h4>
                </Link>
            </div>
            <div>
                <p>SearchingBar</p>
            </div>
        </nav>
        )
}


