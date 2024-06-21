import React, { useEffect, useState }  from 'react'
import {Toaster, toast} from "sonner"

function ModalProducts({title, producto, op, enviSol}) {

  const [formData, setFormData] = useState({
    nombre: '',
    marca: '',
    costo: '',
    cantidad_disponible: 0
  });

  useEffect(() => {
    if (producto.nombre !== null || producto.marca !== null || producto.costo !== null) {
      setFormData({
        nombre: producto.nombre,
        marca: producto.marca,
        costo: producto.costo,
        cantidad_disponible: producto.cantidad_disponible
      });
    } 
  }, [producto]);

  const validar = () => {
    let parametro;
    let metodo;
    const { nombre, marca, costo, cantidad_disponible} = formData;
    if(nombre.trim() === "" || marca.trim() === "" || costo === "" ){
      toast.error("Debe completar los campos obligatorios");
    }else{
      if(op  ===1){
        parametro = {nombre:nombre.trim(), marca:marca.trim(), costo: costo, cantidad_disponible: cantidad_disponible}
        metodo= 'POST';
      }else if(op === 2){
        parametro = {codigo_producto: producto.codigo_producto, nombre:nombre.trim(), marca:marca.trim(), costo: costo, cantidad_disponible: cantidad_disponible}
        metodo= 'PUT';
      }
      enviSolicitud(parametro, metodo);
    }
  }

  const enviSolicitud = (param, met) => {
    enviSol(param, met)
    document.getElementById('btnCerrar').click();
  }


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <div id="modalProducts" className="modal fade" aria-hidden="true">
      <Toaster position='top-center' theme='light' duration={1500} visibleToasts={4} richColors/>

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
              <input type="text" id="nombre" name="nombre" className="form-control" placeholder="Nombre" value={formData.nombre} onChange={handleChange}/>
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text"><i className="fa-regular fa-copyright"></i></span>
              <input type="text" id="marca" className="form-control" placeholder="Marca" name='marca' value={formData.marca} onChange={handleChange}/>
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text"><i className="fa-solid fa-dollar-sign"></i></span>
              <input type="number" id="price" className="form-control" 
                placeholder="Precio" 
                name='costo' value={formData.costo} onChange={handleChange}
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text"><i className="fa-solid fa-arrow-trend-up"></i></span>
              <input type="number" id="stock" className="form-control" placeholder="Stock" 
              name='cantidad_disponible' value={formData.cantidad_disponible} onChange={handleChange}
              />
            </div>

            <div className="d-grid col-6 mx-auto">
              <button className="btn btn-success" onClick={() => validar()}>
                <i className="fa-solid fa-floppy-disk"></i> Guardar
              </button>
            </div>
          </div>
          {/*Fin del Modal*/}
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" id='btnCerrar'>Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ModalProducts