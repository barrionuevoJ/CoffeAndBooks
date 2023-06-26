import React from 'react';
import '../assets/css/UltimoProducto.css'
import { useState, useEffect } from 'react';

function UltimoProducto() {

    const [lastProduct, setLastProduct] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3005/api/products`)
            .then(response => response.json())
            .then(data => setLastProduct(data.data));
    }, []);



    useEffect(() => {
        if (lastProduct.length > 0) {
            const lastProductIndex = lastProduct.length - 1;
            setLastProduct(lastProduct[lastProductIndex]);
        }
    }, [lastProduct]);

    const img = `http://localhost:3005/Images/products/${lastProduct.img}`

    return (
        <React.Fragment>

            <div>
                <div className='lastProduct-header'>
                    <h1>Último producto en DB</h1>
                </div>

                <div className='lastProduct-body'> {/*Tbh, this DIV should be a section lol*/}
                    <div className='img'>
                        <img src={img} alt="lastProduct"></img>
                    </div>

                    <div className='description'>
                        <h6> {lastProduct.titulo}</h6>
                        <p> {lastProduct.descripcion} </p>
                    </div>
                </div>
            </div>


        </React.Fragment>
    )


}

export default UltimoProducto