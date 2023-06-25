import React from 'react'
import '../assets/css/BarraLateral.css'
import imagen from '../assets/images/Logo.png'

function BarraLateral() {
    return (
        <React.Fragment>
            <div className="BarraLateral">

                <a className="contenedor-imagen" href="/">
                    <div className="contenido-imagen">
                        <img className="imagen" src={imagen} alt="Coffe and books"/>
                    </div>
                </a>

                <a href="/"><span>Dashboard</span></a>

                <hr />
          
                <a href="http://localhost:3002">Pagina Principal</a>
            </div>
        </React.Fragment>
    )
}
export default BarraLateral