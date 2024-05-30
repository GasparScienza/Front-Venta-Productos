import React, { useEffect, useState }  from 'react'
import {Toaster, toast} from "sonner"

function ModalProducts({title, producto, operacion}) {
  const [name, setName] = useState("");
  const [marca, setMarca] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");


  const validar = () => {
    let parametros;
    let metodo;
    if(name.trim() === "" || marca.trim() === "" || precio === "" || stock === ""){
      toast.error("Debe completar los campos obligatorios");
    }
    
  }

  return (
    <div id="modalProducts" className="modal fade" aria-hidden="true">
      <Toaster 
        position='top-center' 
        theme='light' 
        duration={1500} 
        visibleToasts={4}
        richColors
      />
      <div className="modal-dialog">

        <div className="modal-content">
          {/*Cabecera del Modal*/}
          <div className="modal-header">
            <label className="h5">{title}</label>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
          </div>
          {/*Cuerpo del Modal*/}
          <div className="modal-body">
            <input type="hidden" id="id"></input>

            <div className="input-group mb-3">
              <span className="input-group-text"><i className="fa-solid fa-file-signature"></i></span>
              <input type="text" id="nombre" className="form-control" placeholder="Nombre" value={producto.nombre} 
                onChange={(e) => setName(e.target.value)}/>
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text"><i className="fa-regular fa-copyright"></i></span>
              <input type="text" id="marca" className="form-control" placeholder="Marca" value={producto.marca} 
                onChange={(e) => setMarca(e.target.value)}/>
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text"><i className="fa-solid fa-dollar-sign"></i></span>
              <input type="number" id="price" className="form-control" 
                placeholder="Precio" 
                value={producto.costo} 
                onChange={(e) => setPrecio(e.target.value)}
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text"><i className="fa-solid fa-arrow-trend-up"></i></span>
              <input type="number" id="stock" className="form-control" placeholder="Stock" value={producto.cantidad_disponible} 
                onChange={(e) => setStock(e.target.value)}/>
            </div>

            <div className="d-grid col-6 mx-auto">
              <button className="btn btn-success" onClick={() => validar()}>
                <i className="fa-solid fa-floppy-disk"></i> Guardar
              </button>
            </div>
          </div>
          {/*Fin del Modal*/}
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ModalProducts