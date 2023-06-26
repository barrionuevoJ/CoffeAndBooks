import React from 'react';
import imagen from '../assets/images/default-image.png'
import '../assets/css/UltimoProducto.css'
import { useState, useEffect } from 'react';

function UltimoProducto() {

    const [lastProduct, setLastProduct] = useState([]);
    const [img, setImg] = useState([]);

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

console.log(lastProduct);

    return (
        <React.Fragment>

            <div>
                <div className='lastProduct-header'>
                    <h1>Último producto en DB</h1>
                </div>

                <div className='lastProduct-body'> {/*Tbh, this DIV should be a section lol*/}
                    <div className='img'>
                        <img src={imagen}></img>
                    </div>

                    <div className='description'>
                        <h6> { lastProduct.titulo }</h6>
                        <p> {lastProduct.descripcion} </p>
                    </div>
                </div>
            </div>


        </React.Fragment>
    )


}

export default UltimoProducto