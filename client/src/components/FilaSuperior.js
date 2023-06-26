import React from 'react'
import '../assets/css/Conteo.css'
import '../assets/css/FilaSuperior.css'
import CategoriasEnBD from './CategoriasEnBD'
import { useEffect, useState } from 'react'

function FilaSuperior() {
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:${process.env.REACT_APP_PORT || 3005}/api/users`)
            .then(response => response.json())
            .then(data => setUsers(data.meta));

        fetch(`http://localhost:${process.env.REACT_APP_PORT || 3005}/api/products`)
            .then(response => response.json())
            .then(data => setProducts(data.meta));
    }, [])

    let category;

    if (products.countByCategory) {
        category = products.countByCategory.length
    }

    else {
        category = 0
    }

    return (
        <React.Fragment>
            <div className="ContenidoFS">
                <div className='FS-header'>
                    <h1>Dashboard</h1>
                </div>

                <div>
                    <div className='conteo'>
                        <div className='title'>
                            <h4> Total de productos, usuarios y categorias.  </h4>
                        </div>

                        <div className='cardContainer'>
                            <div className='countCard'>
                                <p>Total de Productos - {products.count}</p>
                            </div>

                            <div className='countCard'>
                                <p>Total de Categorias - { category }</p>
                            </div>

                            <div className='countCard'>
                                <p>Total de Usuarios - {users.count}</p>
                            </div>
                        </div>
                    </div>

                </div>

                <CategoriasEnBD />
            </div>
        </React.Fragment>
    )
}
export default FilaSuperior