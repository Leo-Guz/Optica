import React from "react";

const Contacto = () => {
    return (
        <div className="contacto">
            <p>
                Avicultura #1C, Col. Independencia,<span className="pequeño"/>
                Cuernavaca, Mor. CP.62115<span className="largo"/>
                Lunes a Viernes de 10 a.m. a 7 p.m.<span className="pequeño"/>
                Jueves y Sábado de 10 a.m. a 3 p.m<span className="largo"/>
                Otros horarios con previa cita<span className="pequeño"/>
                (777) 346-5392
            </p>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.8316996554804!2d-99.25198998583267!3d18.983038759822687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cde1b32d233731%3A0x9664d25a471093b!2zw5NwdGljYSBNZWdhIFZpc2nDs24!5e0!3m2!1ses-419!2smx!4v1665185811684!5m2!1ses-419!2smx"
                className="iframe-map">
            </iframe>
        </div>
    );
}
export default Contacto;