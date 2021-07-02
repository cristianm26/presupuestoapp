import React, { useState } from 'react'
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';
const Formulario = ({ setGasto, setCrearGasto }) => {

    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);
    //Cuando el usuario agrega un gasto
    const agregarGasto = (e) => {
        e.preventDefault();

        //validar
        if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
            setError(true)
            return
        }
        setError(false);
        //construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }
        //pasar el gasto al componente principal
        setGasto(gasto)
        setCrearGasto(true)
        //resetear el form
        setNombre('');
        setCantidad(0);
    }

    return (
        <form onSubmit={agregarGasto} >
            <h2>Agrega Tus Gastos Aqui</h2>
            {error ? <Error mensaje="Ambos campos son obligatorios o Presupuesto Incorrecto" /> : null}
            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 200"
                    value={cantidad}
                    onChange={(e) => setCantidad(parseInt(e.target.value))}
                />
            </div>
            <button
                type="submit"
                className="button-primary full-width">
                Agregar Gasto
            </button>
        </form>
    )
}
Formulario.propTypes = {
    setGasto: PropTypes.func.isRequired,
    setCrearGasto: PropTypes.func.isRequired
}
export default Formulario
