import React from 'react'
import '../assets/css/Contenido.css'
import BarraDeNavegacion from './BarraDenavegacion'
import FilaSuperior from './FilaSuperior'
import Producto from './Producto'
import Footer from './Footer'

function Contenido() {
    return(
        <React.Fragment>
            <div className="Contenido">
                <div>
                    <BarraDeNavegacion />
                    <FilaSuperior />
                    <Producto />
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    )
}
export default Contenido