import { useState, useEffect } from 'react'
import Mensaje from './Mensaje'
import CerrarBtn from '../img/cerrar.svg'

const Modal = ({ setModal, animarModal,setAnimarModal, guardarGasto, gastoEditar }) => {

    const [mensaje, setMensaje] = useState('')    
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')

    useEffect(() => {
        if( Object.keys(gastoEditar).length > 0 ) {
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
        }
    }, [])
    
    const ocultarModal = () => {
        setAnimarModal(false)        
        setTimeout(() => {
            setModal(false)
        }, 500)
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(nombre === '' || cantidad === '' || cantidad <= 0 || categoria === '') {
            setMensaje('Todos los campos son Obligatorios')
            
            setTimeout(() =>{
                setMensaje('')
            }, 3000)
            
            return;
        }

        guardarGasto({ nombre, cantidad, categoria })

        // if([nombre, cantidad, categoria].includes('')) {
        //     console.log('Fallo la validacion');
        //     return;
        // } //Tambien se puede hacer de esta manera
    }

    return (
        <div className='modal'>

            <div className="cerrar-modal">
                <img 
                    src={CerrarBtn} 
                    alt="Cerrar Modal" 
                    onClick={ocultarModal}
                />
            </div>

            <form 
                onSubmit={handleSubmit}
                className={`formulario ${ animarModal ? 'animar' : 'cerrar' }`}
            >
                <legend> Nuevo gasto </legend>

                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

                <div className="campo">
                    <label htmlFor="nombre"> Nombre gasto </label>
                    <input 
                        id='nombre'
                        type="text" 
                        placeholder='Anade el nombre del gasto'                    
                        value={nombre}
                        onChange={ e => setNombre(e.target.value)}
                    />
                </div>
                <div className="campo">
                    <label htmlFor="cantidad"> Cantidad </label>
                    <input 
                        id='cantidad'
                        type="number" 
                        placeholder='Anade la Cantidad del gasto: Ej. 300' 
                        value={cantidad}
                        onChange={ e => setCantidad(Number(e.target.value))}                   
                    />
                </div>
                <div className="campo">
                    <label htmlFor="categoria"> Categoria </label>
                    <select id="categoria"
                        value={categoria}
                        onChange={ e => setCategoria(e.target.value)}
                    >
                        <option value=""> -- Seleccione -- </option>
                        <option value="ahorro"> Ahorro </option>
                        <option value="comida"> Comida </option>
                        <option value="casa"> Casa </option>
                        <option value="gastos"> Gastos Varios </option>
                        <option value="ocio"> Ocio </option>
                        <option value="salud"> Salud </option>
                        <option value="suscripciones"> Suscripciones </option>
                    </select>
                </div>

                <input 
                    type="submit"
                    value="Anadir Gastos"
                />

            </form>

        </div>
    )
}

export default Modal