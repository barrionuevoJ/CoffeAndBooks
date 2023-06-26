import React from 'react';
import '../assets/css/Producto.css'

import { useState, useEffect } from 'react';
import ListaProductos from './ListaProductos';

function Producto() {

  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3005/api/products`)
      .then(response => response.json())
      .then(data => setProduct(data.products));


  }, [])

  return (
    <React.Fragment>
      <div className='Producto-header'>
        <h1>Listado de producto</h1>
      </div>

      <div className='Lista'>
        {products.map((product, i) => (
          <ListaProductos key={i} {...product} />
        ))}
      </div>
    </React.Fragment>

  )
}

export default Producto