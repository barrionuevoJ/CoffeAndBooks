import { useEffect, useState } from 'react'

function TopBar() {

    const [products, setProducts] = useState({})

    useEffect(() => {
        apiCall(`http://localhost:${process.env.REACT_APP_PORT || 3005}/api/products`)
    }, [])

    const apiCall = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => setProducts(data))
    }

    return (
        <div>{JSON.stringify(products)}</div>
    )
}

export default TopBar