import React from 'react'
import '../assets/css/BarraLateral.css'
import imagen from '../assets/images/Logo.png'

function BarraLateral() {
    return (
        <React.Fragment>
            <div className="BarraLateral">

                <a className="contenedor-imagen" href="/">
                    <div className="contenido-imagen">
                        <img className="imagen" src={imagen} alt="Digital House"/>
                    </div>
                </a>

                <a href="/"><span>Dashboard - DH movies</span></a>

                <hr />

                <a href="http://localhost:3002">Pagina Principal</a>
            </div>
        </React.Fragment>
    )
}
export default BarraLateral