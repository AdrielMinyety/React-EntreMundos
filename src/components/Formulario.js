import React, { Component } from 'react';

class Formulario extends Component {
    state = { 
        libras: "",
        planeta: "",
        unidadDePeso: "lb"
    }

    actualizarState = (e) => {
        // leer los datos del input.
        // read the data from the input.
          // console.log(e.target.value);
        // haciendo un destructuring.
        // making a destructuring.
        const {name, value} = e.target;
        // guardar en el State.
        // save in the State.
        this.setState({
            [name] : value
        })
    }

    habilitarSubmit = () => {
        // Destructuring al state
        // Destructuring the State
        const { libras, planeta } = this.state;
        let noValido = !libras || !planeta;
        // validar si está vacío.
        // validate if is empty.
        return noValido;
    }

    mandarDatos = (e) => {
        e.preventDefault();
        // destructuring al state
        // destructuring the state
        const { libras, planeta, unidadDePeso } = this.state;
        // pasarlo mediante props al componente padre
        // send it through props to the parent component
        this.props.datosPeso(libras, planeta, unidadDePeso);
    }

    render() {
        // console.log(this.state);
        return (
            <form className="w-75 mx-auto" onSubmit={ this.mandarDatos } >
                <div className="form-row">
                    <div className="form-group col-6">
                        <input
                            onChange={ this.actualizarState }
                            name="libras" 
                            placeholder="Your weight"
                            type="number"
                            className="form-control font-weight-bold"
                        />
                    </div>
                    <div className="form-group col-6">
                        <select name="unidadDePeso" onChange={ this.actualizarState } className="form-control font-weight-bold">
                            <option value="lb">Pounds - Libras</option>
                            <option value="kg">Kg - Kilogramos</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <select name="planeta" onChange={ this.actualizarState } className="form-control font-weight-bold">
                        <option value="">Where would you like to start?</option>
                        <option value="luna">The moon</option>
                        <option value="marte">Mars</option>
                        <option value="saturno">Saturn</option>
                        <option value="jupiter">Jupiter</option>
                        <option value="agujero">Black Hole - Bonus</option>
                    </select>
                </div>
                <input
                    disabled={ this.habilitarSubmit() }
                    type="submit"
                    className="btn btn-primary btn-block px-5 "
                    value="Travel and calculate!"
                />
            </form>
        );
    }
}

export default Formulario;
