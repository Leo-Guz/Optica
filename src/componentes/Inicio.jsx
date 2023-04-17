import React from "react";
import { NavLink } from "react-router-dom";

const Inicio = () => {
    return (
        <div className="inicio">
            <p className="p-inicio" >¡Cuidado con usar lentes pregraduadas! <span></span>
                Pueden dañar más tu vista. <span></span>
                Mejor contáctanos y un especialista en salud visual te atenderá. <span></span>
                <NavLink className='btn-cita' to="/Contacto">¡Haz tu cita!</NavLink>
            </p>
            <div className="img-inicio"></div>
        </div>
    );
}
export default Inicio;