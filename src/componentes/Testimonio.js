import React from 'react';
import '../stylessheets/Testimonios.css'

const Testimonio = (props) => {
    return (
      <div className="contenedor-testimonio">
        <img
          className="imagen-testimonio"
          src={require(`../imagenes/img${props.imagen}.png`)}
          alt={`Testimonio de ${props.ntesti}`}
        />
        <div className="contenedor-texto-testimonio">
          <p className="nombre-testimonio">
           <strong>{props.nombre}</strong> en {props.pais}
          </p>
          <p className="cargo-testimonio">
            {props.cargo} en <strong>{props.empresa} </strong>
          </p>
          <p className="texto-testimonio"> "{props.testimonio}"</p>
        </div>
      </div>
    );
};

export default Testimonio;