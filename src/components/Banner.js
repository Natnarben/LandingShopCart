import React from 'react'

export default function Banner() {
    return (
        <div>
            <div className="banner-container">
                <img className="banner-pic" src="https://i1.wp.com/drsoler.com/blog/wp-content/uploads/2015/09/mirada_de_mujer.jpg?resize=501%2C177" alt="banner" />
                <p className="text1"><span>.</span> TE REGALAMOS <span>.</span></p>
                <p className="text2"><span>.</span> EN TU PRIMERA <span>.</span></p>
                <p className="text3"><span>..</span>COMPRA<span>.</span></p>
            </div>
            <div className="text-container">
                <div className="sub-text">
                    <p><span className="span-text">RECIEN </span> LLEGADOS</p>
                </div>
                <div className="sub-text2">
                    <p >LO ULTIMO DE NUESTRAS TIENDAS</p>
                    <br />
                    <br />
                </div>
            </div>
        </div>
    )
}
