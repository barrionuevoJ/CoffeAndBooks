import React, { Component } from 'react';
import '../assets/css/CategoriasEnBD.css'
import Categoria from './Categoria';

class CategoriasEnBD extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categorias: [],
        }
    }

    getCategorias() {
        fetch(`http://localhost:${process.env.REACT_APP_PORT || 3005}/api/products`).then(response => response.json()).then(data => {
            console.log(data.meta.countByCategory)
            this.setState({ categorias: data.meta.countByCategory })
        })
    }

    componentDidMount() {
        this.getCategorias();
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <div className='CategoriasEnBD'>
                        <div className='card-header'>
                            <h6>Categorias en Base de Datos</h6>
                        </div>
                        <div className='card-body'>
                            <div className='fila'>
                                {this.state.categorias.map((categoria, index) => {
                                    return <Categoria {...categoria} key={index} />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default CategoriasEnBD