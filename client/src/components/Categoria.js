import React from 'react';
import '../assets/css/Categoria.css'

function Categoria(props) {
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body-contain">
                    <div className="card-text">
                        {props.categoria + ' - ' + props.count}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Categoria;