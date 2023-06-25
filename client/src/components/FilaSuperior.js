import React from 'react'
import CategoriasEnBD from './CategoriasEnBD'
import { useEffect, useState } from 'react'

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
                    <h4>Total de Productos</h4>
                    
                    <p>
                        {products.count}
                    </p>
                </div>

                <div>
                    <h4>Total de Categorias</h4>

                    <p>
                        { category }
                    </p>
                </div>

                <div>
                    <h4>Total de Usuarios</h4>

                    <p>
                        { users.count }
                    </p>
                </div>
                <CategoriasEnBD />
            </div>
        </React.Fragment>
    )
}
export default FilaSuperior