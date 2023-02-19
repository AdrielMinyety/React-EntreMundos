import React from 'react'

// importar todas las imagenes
// import every image
import luna from '../img/luna.png';
import marte from '../img/marte.png';
import saturno from '../img/saturno.png';
import jupiter from '../img/jupiter.png';
import agujero from '../img/agujeronegro.png';

const Resultado = (props) => {
    let image;
    // leer Props
    // read Props
    switch (props.planeta) {
        // dependiendo de qué planeta ha sido elegido, cargar imagen.
        // depending which one planet has beed chosen, load image.
        case "luna":
            image = luna;
            break;
        case "marte":
            image = marte;
            break;
        case "saturno":
            image = saturno;
            break;
        case "jupiter":
            image = jupiter;
            break;
        case "agujero":
            image = agujero;
            break;
        default:
            console.log("Error: los datos han sido alterados");
            break;
    }
    
    return (
        <div className="card bg-light w-75 mx-auto p-2 my-5">
          <img className="card-img-top mx-auto" src={"./" + image} alt="cuerpo celeste .png" style={{maxWidth: 20 + 'em'}} />
          <div className="card-body bg-white rounded mt-2">
            <p className="card-text text-dark">Your weight is <span className="font-weight-bold text-primary">{ Number(props.pesoTotal).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") }</span> <span className="font-weight-bold">{props.unidadDePeso}(s)</span>.</p>
          </div>
        </div>
    )
}

export default Resultado
