import useLetras from "../hooks/useLetras"

const Letra = () => {

    const { letra, cargando } = useLetras()
  return (
    <>
   {  cargando ? 'Cargando' : <div className="letra">{letra.lyrics}</div>}
   </>
  )
}

export default Letra