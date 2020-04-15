import React, { Component } from 'react';
import './App.css';
// importar componentes y funciones
// import components and functions 
import Formulario from './components/Formulario';
import { calcularPeso } from './helpers.js';
import Resultado from './components/resultado.js';
import Spinner from './components/Spinner';
// crear un componente como APP
// create a component as App
class App extends Component {
  state = {
    pesoTotal : "",
    planeta: "",
    unidadDePeso: "",
    cargando: false
  }
  // obtener datos del usuario
  // get the user's data
  datosPeso = (libras, planeta, unidadDePeso) => {
    // calcular el peso y poner los datos en la variable 'datos'
    // calculate the weight and put the data in the var 'datos'
    let datos = calcularPeso(libras, planeta, unidadDePeso);
    // insertarlos en el state
    // insert in the state
    this.setState({
      cargando: true
    }, () => {
      setTimeout(() => {
        this.setState({
          pesoTotal: datos.peso_final,
          planeta: datos.planeta,
          unidadDePeso: datos.unidad,
          cargando: false
        })
      }, 2000);
    })
  }

  render() {
    const { pesoTotal, planeta, unidadDePeso, cargando } = this.state;
    let componente;

    // si no está calculando mostrar mensaje.
    // if is not calculing show message.
    if(pesoTotal === "" && !cargando) {
      componente = "Agrega los datos para hacer el viaje a otros mundos!";
    } else if (cargando) {
      // si está calculando el peso, cargar componente "spinner"
      // if is calculing the weight, load component "spinner"
      console.log("cargando...")
      componente = <Spinner />;
    } else {
      // si hay resultados, cargar componente con resultados.
      // if there is results, load components with the results.
      componente = <Resultado
                    pesoTotal={pesoTotal}
                    planeta={planeta}
                    unidadDePeso={unidadDePeso}
                  />;
    }

    return (
      <div className="universo py-5">
        <h1 className="text-light text-center mb-5">Tu peso en otros Planetas!</h1>
        <Formulario 
          datosPeso={this.datosPeso}
        />
        <div className="text-center text-white mt-5 w-75 mx-auto">
          {componente}
        </div>
      </div>        
    );
  }
}

export default App;
