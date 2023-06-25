import React from 'react'
import '../assets/css/Conteo.css'
import CategoriasEnBD from './CategoriasEnBD'
import { useEffect, useState } from 'react'
import Categoria from './Categoria';

function FilaSuperior() {
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:${process.env.REACT_APP_PORT || 3005}/api/users`)
            .then(response => response.json())
            .then(data => setUsers(data.meta));

        fetch(`http://localhost:${process.env.REACT_APP_PORT || 3005}/api/products`)
            .then(response => response.json())
            .then(data => setProducts(data.meta));


        setLoading(false)
    }, [])

    console.log(users);
    console.log(products.countByCategory);
    let category;

    if (products.countByCategory) {
        category = products.countByCategory.length
    }

    else {
        category = 0
    }

    console.log();

    return (
        <React.Fragment>
            <div className="ContenidoFS">
                <h1>Dashboard</h1>

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
                                <p>Total de Categorias - { Categoria }</p>
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