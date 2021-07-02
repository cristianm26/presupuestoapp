import React, { useState } from 'react'
import Error from './Error';
import PropTypes from 'prop-types';
const Pregunta = ({ setPresupuesto, setRestante, setMostrarPregunta }) => {
    //definir el state
    const [cantidad, setCantidad] = useState(0);

    const [error, setError] = useState(false);

    //Funcion que lee el presupuesto
    const definirPresupuesto = (e) => {
        setCantidad(parseInt(e.target.value))
    }

    // Submit para definir el presupuesto
    const agregarPresupuesto = (e) => {
        e.preventDefault();
        //Validar 
        if (cantidad < 1 || isNaN(cantidad)) {
            setError(true)
        }
        //si se pasa la validacion
        setError(false);
        setPresupuesto(cantidad)
        setRestante(cantidad)
        setMostrarPregunta(false)
    }
    return (
        <>
            <h2>Coloca el Prseupuesto</h2>
            {error ? <Error mensaje="El presupuesto es Incorrecto" /> : null}
            <form onSubmit={agregarPresupuesto}>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca Tu Presupuesto"
                    onChange={definirPresupuesto}
                />

                <button
                    type="submit"
                    className="button-primary u-full-width"> Definir Presupuesto
                </button>
            </form>
        </>
    )
}
Pregunta.propTypes = {
    setPresupuesto: PropTypes.func.isRequired,
    setRestante: PropTypes.func.isRequired,
    setMostrarPregunta: PropTypes.func.isRequired,
}
export default Pregunta
