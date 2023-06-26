import React from 'react';
import '../assets/css/ListaProductos.css'


const ListaProductos = (props) => {
    return (
        <div className='ListaProductos'>
            <div className='bloque'>
                <h6>ID</h6>
                <p>{props.id}</p>
            </div>
            <div className='bloque'>
                <h6>Titulo</h6>
                <p>{props.titulo}</p>
            </div>
            <div className='bloque'>
                <h6>Categoria</h6>
                <p>{props.categoria[0].categoria}</p>
            </div>
            <div className='bloque'>
                <h6>Autor</h6>
                <p>{props.autor[0].autor}</p>
            </div>
            <div className='bloque'>
                <h6>Genero</h6>
                <p>{props.genero[0].genero}</p>
            </div>
        </div>
    );
}

export default ListaProductos;