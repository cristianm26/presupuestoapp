import React from 'react'
import { revisarPresupuesto } from '../helpers'
import PropTypes from 'prop-types';
const ControlPrepuesto = ({ presupuesto, restante }) => {
    return (
        <>
            <div className="alert alert-primary">
                Presupuesto: $ {presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto, restante)}>
                Restante: $ {restante}
            </div>
        </>
    )
}
ControlPrepuesto.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}
export default ControlPrepuesto
