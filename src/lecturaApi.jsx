import './App.css'
import { useFetch } from './useFetch'

function LecturaApi() {

  const {data, loading, error, handleCancelRequest} = useFetch("http://127.0.0.1:8080/productos");
  return (
    <div className='App'>
        <h1>Fetch Like a PRO</h1>
        <button onClick={handleCancelRequest}>Cancelar Request</button>
        <div className='card'>
          <ul>
            {error && <li>Error: {error}</li>}
            {loading && <li>Loanding...</li>}
            {data?.map((producto) => (
              <li key={producto.codigo_producto}>{producto.nombre}</li>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default LecturaApi
