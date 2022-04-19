import React, {useState} from 'react'
import useLetras from '../hooks/useLetras'

const Formulario = () => {

    const { setAlerta, busquedaLetra } = useLetras()

    const [busqueda, setBusqueda] = useState({
        artista: '',
        cancion: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        if(Object.values(busqueda).includes('')){
            setAlerta('Coloca el nombre del artista y canción');
            return
        }
        busquedaLetra(busqueda);
        setAlerta('')
    }

  return (
    <form
    onSubmit={handleSubmit}
    >
        <legend>
            Busca por Artistas y Canciones
        </legend>

        <div className='form-grid'>
            <div>
                <label htmlFor="">Artista</label>
                <input 
                type="text" 
                name="artista"
                placeholder='Busca por artista'
                value={busqueda.artista}
                onChange={(e) => setBusqueda({...busqueda, [e.target.name] : e.target.value})}

                />

            </div>
            <div>
                <label htmlFor="">Canción</label>
                <input 
                type="text" 
                name="cancion"
                placeholder='Busca por canción'
                value={busqueda.cancion}
                onChange={(e) => setBusqueda({...busqueda, [e.target.name] : e.target.value})}
                />

            </div>
            <input type="submit" value="buscar" />
        </div>
    </form>
    
  )
}

export default Formulario