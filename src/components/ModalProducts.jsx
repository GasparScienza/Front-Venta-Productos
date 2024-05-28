import React, { useEffect, useState }  from 'react'

function ModalProducts({title}) {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [marca, setMarca] = useState("");
    const [price, setPrice] = useState("");


  return (
    <div id="modalProducts" className="modal fade" aria-hidden="true">
          <div className="modal-dialog">
              <div className="modal-content">
                  <div className="modal-header">
                      <label className="h5">{title}</label>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
                  </div> 
                  <div className="modal-body">
                    <input type="hidden" id="id"></input>
                    
                    <div className="input-group mb-3">
                      <span className="input-group-text"><i className="fa-solid fa-gift"></i></span>
                      <input type="text" id="nombre" className="form-control" placeholder="Nombre" value={name} 
                        onChange={(e) => setName(e.target.value)}/>
                    </div>

                    <div className="input-group mb-3">
                      <span className="input-group-text"><i className="fa-solid fa-comment"></i></span>
                      <input type="text" id="marca" className="form-control" placeholder="marca" value={marca} 
                        onChange={(e) => setName(e.target.value)}/>
                    </div>

                    <div className="input-group mb-3">
                      <span className="input-group-text"><i className="fa-solid fa-dollar-sign"></i></span>
                      <input type="text" id="price" className="form-control" placeholder="Precio" value={price} 
                        onChange={(e) => setName(e.target.value)}/>
                    </div>

                    <div className="d-grid col-6 mx-auto">
                      <button className="btn btn-success">
                        <i className="fa-solid fa-floppy-disk"></i> Guardar
                      </button>
                    </div>
                  </div>

                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                  </div>
              </div>
          </div>
        </div>
  )
}
export default ModalProducts