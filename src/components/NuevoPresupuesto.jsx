import { useState } from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({ presupuesto, setPresupuesto }) => {
  
    const [mensaje, setMensaje] = useState('')
    
    const handlePresupuesto = (e) => {
        e.preventDefault();
        if (!Number(presupuesto) || Number(presupuesto) < 0) {
            setMensaje('No es un Presupuesto Valido');
        } else {
            console.log('SI Es un Presupuesto Valido');
        }
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form onSubmit={handlePresupuesto} className='formulario'>
                <div className='campo'>
                    <label> Definir Presupuesto </label>
                    <input 
                        className='nuevo-presupuesto'
                        type="text"
                        placeholder='Anade tu Presupuesto'
                        value={presupuesto}
                        onChange={ e => setPresupuesto(e.target.value) }
                    />
                </div>
                <input 
                    type="submit" 
                    value='anadir' 
                />
                {mensaje && <Mensaje tipo="error"> {mensaje} </Mensaje>}
            </form>
        </div>
    )
}

export default NuevoPresupuesto
