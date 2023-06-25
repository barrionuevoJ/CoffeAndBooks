import React from 'react';

import {useState, useEffect} from 'react';

function Producto () {

const [products, setProduct] = useState([]);

    useEffect(() => {
    fetch(`http://localhost:3005/api/products`)
        .then(response => response.json())
        .then(data => setProduct(data.products));

       
}, [])

console.log(products.titulo);

return (
	<React.Fragment>
	<h1>Listado de producto</h1>

    <div>
        <label> Titulo </label>
	<ul>
        {products.map(product => (
          <li key={product.id}>
            <img src='product.img_URL'></img>
            <p>{ `${product.titulo} - ${product.detail.autor}` }</p>
          </li>
        ))}
      </ul>

      </div>
	</React.Fragment>

 )
}

export default Producto