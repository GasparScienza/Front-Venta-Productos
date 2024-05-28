import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import ModalProducts from "./ModalProducts";
import "./ShowProducts.css"


function ShowProducts() {
    const url = "http://127.0.0.1:8080/productos";
    const [products, setProducts] = useState([]);
    const [operation, setOperation] = useState("");
    const [title, setTitle] = useState("");

    const cambiarTitle = (op) => {
      setOperation(op);
      if(op === 1){
        setTitle("Registrar Producto");
      }else if(op === 2){
        setTitle("Editar Producto");
      }
    }



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
              <button onClick={() => handleEdit(row)} className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalProducts">
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
        cambiarTitle(2);
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
                <button onClick={() => cambiarTitle(1)} className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#modalProducts">
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
        <ModalProducts title={title}/>
      </div>
    );
}

export default ShowProducts