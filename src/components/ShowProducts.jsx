import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import ModalProducts from "./ModalProducts";


function ShowProducts() {
    const url = "http://127.0.0.1:8080/productos";
    const [products, setProducts] = useState([]);
    // const [id, setId] = useState("");
    // const [name, setName] = useState("");
    // const [marca, setMarca] = useState("");
    // const [price, setPrice] = useState("");
    // const [operation, setOperation] = useState("");
    // const [title, setTitle] = useState("");

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        const respuesta = await axios.get(url);
        setProducts(respuesta.data);
    }

    const colums = [
      {
        name: "Nombre",
        selector: row => row.nombre,
        sortable: true
      },
      {
        name: "Marca",
        selector: row => row.marca,
        sortable: true
      },
      {
        name: "Costo",
        selector: row => `$${row.costo}`,
        sortable: true
      },
      {
        name: "Operacion",
        cell: row => (
            <div>
              <button onClick={() => handleEdit(row)} className="btn btn-warning">
                <i className="fas fa-solid fa-edit"></i>
              </button>
              <button onClick={() => handleDelete(row)} className="btn btn-danger">
                    <i className="fas fa-solid fa-trash"></i>
                </button>
            </div>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
         button: true,
      }
    ]
    const handleEdit = (row) => {
        console.log("Editar:", row);
        // Agrega la lógica para editar
      };
    
      const handleDelete = (row) => {
        console.log("Eliminar:", row);
        // Agrega la lógica para eliminar
      };

    return (
      <div className="showProducts">
        <div className="container-fluid">
          <div className="row mt-3">
            <div className="col-md-4 offset-md-4">
              <div className="d-grid mx-auto">
                <button className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#modalProducts">
                  <i className="fa-solid fa-circle-plus"></i> Añadir
                </button>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12 col-lg-12 offset-0 offset-lg-0">
              <div className="table-responsive">
                <DataTable 
                columns={colums} 
                data={products}
                pagination
                fixedHeader
                theme="dark"
                />
              </div>
            </div>
          </div>
        </div>
        <ModalProducts/>
        {/* <div id="modalProducts" className="modal fade" aria-hidden="true">
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
        </div> */}
      </div>
    );
}

export default ShowProducts