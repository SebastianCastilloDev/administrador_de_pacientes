
import { useState, useEffect } from "react"
import ErrorMessage from "./ErrorMessage"
import { v4 as uuidv4 } from 'uuid';

export default function Formulario({ pacientes, setPacientes }) {

    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(nombre, propietario, email, fecha, sintomas)
        console.log([nombre, propietario, email, fecha, sintomas].includes(''))
        // Validar formulario
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            setError(true)
            return
        }

        setError(false)

        // Objeto paciente
        const key = uuidv4()

        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas,
            key
        }
        setPacientes([...pacientes, objetoPaciente])

        // Resetear formulario
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')


    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">
                Seguimiento Pacientes
            </h2>
            <p className="text-lg mt-5 text-center mb-10">
                Añade pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form
                className="bg-white shadow rounded-lg py-10 px-5 mb-10 mx-5"
                onSubmit={handleSubmit}
            >
                {error && <ErrorMessage><p>Todos los campos son obligatorios</p></ErrorMessage>}
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                        Nombre Mascota
                    </label>
                    <input
                        type="text"
                        id="mascota"
                        placeholder="Nombre Mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
                        Nombre Propietario
                    </label>
                    <input
                        type="text"
                        id="propietario"
                        placeholder="Nombre propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={propietario}
                        onChange={e => setPropietario(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                        Email Propietario
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Email propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
                        Fecha de ingreso
                    </label>
                    <input
                        type="date"
                        id="alta"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={fecha}
                        onChange={e => setFecha(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                        Síntomas
                    </label>
                    <textarea
                        id="sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe los síntomas"
                        value={sintomas}
                        onChange={e => setSintomas(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="bg-indigo-600 w-full p-2 mt-5 text-white uppercase font-bold hover:bg-indigo-700 rounded-md cursor-pointer transition-colors" >
                    Agregar Cita
                </button>

            </form>
        </div>
    )
}
