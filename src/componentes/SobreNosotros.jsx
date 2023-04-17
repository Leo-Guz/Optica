import React from "react";

const SobreNosotros = () => {
    return (
        <div className="body-sobreNosotros">
            <div className="sobreNosotros">
                <p class="sob-nos">
                    Desde 1996, en Óptica Mega Visión hemos cuidado la salud visual de cada uno de nuestros pacientes,
                    con personal certificado, y equipo óptico que vamos actualizando para beneficio de ellos.
                </p>
                <div className="retino images"/>
            </div>
            <div class="linea"></div>
            <div className="sobreNosotros">
                <div className="examen images"/>
                <p class="sob-nos">
                    Hemos realizado campañas a instituciones y escuelas, haciendo más práctico el cuidado de sus ojos
                </p>  
            </div>
            <div class="linea"></div>
            <div className="sobreNosotros">
                <p class="sob-nos">
                Con nuestras unidades móviles, hemos logrado llegar a personas que, de otra forma, no podrían ir a realizarse
                un éxamen de la vista.
                </p>
                <div className="ambulancia images"/>
            </div>
        </div>
    );
}
export default SobreNosotros;