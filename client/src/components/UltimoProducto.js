import React from 'react';
import imagen from '../assets/images/Pride-and-Prejudice.jpg'
import '../assets/css/UltimoProducto.css'
import { useState, useEffect } from 'react';

function UltimoProducto() {

    const [lastProduct, setLastProduct] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3005/api/products`)
            .then(response => response.json())
            .then(data => setLastProduct(data.products));
    }, []);

    useEffect(() => {
        if (lastProduct.length > 0) {
            const lastProductIndex = lastProduct.length - 1;
            setLastProduct(lastProduct[lastProductIndex]);
        }
    }, [lastProduct]);

    return (
        <React.Fragment>

            <div>
                <div className='lastProduct-header'>
                    <h1>Último producto en DB</h1>
                </div>

                <div className='lastProduct-body'> {/*Tbh, this DIV should be a section lol*/}
                    <div>
                        <img className='img' src={lastProduct.img}></img>
                    </div>

                    <div className='description'>
                        <p> {lastProduct.descripcion} </p>
                    </div>
                </div>
            </div>


        </React.Fragment>
    )


}

export default UltimoProducto