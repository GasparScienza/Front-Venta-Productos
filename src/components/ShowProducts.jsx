import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import ModalProducts from "./ModalProducts";
import "./ShowProducts.css"
import { manejarRespuesta } from "../ManejarRespuesta";
import { getProducts } from "../getProducts";
import BotonEditarEliminar from "./BotonEditarBorrar";

function ShowProducts() {
  const url = "http://127.0.0.1:8080/productos";
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  const [operacion, setOperacion] = useState("");
  const [product, setProduct] = useState({
    codigo_producto: 0,
    cantidad_disponible: 0,
    costo: "",
    marca: "",
    nombre: "",
  });

  const enviarSolicitud = async (parametro, metodo) => {
    if (metodo === "POST") {
        await manejarRespuesta(metodo, (url + "/crear"), parametro);
    } else if (metodo === "PUT") {
        await manejarRespuesta(metodo, (url + `/editar/${parametro.codigo_producto}`), parametro);
    } else if (metodo === "DELETE") {
        await manejarRespuesta(metodo, (url + `/eliminar/${parametro.codigo_producto}`), parametro);
    }
  }

  const cambiarTitle = (op) => {
    setOperacion(op);
    if(op === 1){
      setProduct({
        codigo_producto: 0,
        cantidad_disponible: 0,
        costo: '',
        marca: '',
        nombre: ''
      });
      setTitle("Registrar Producto");
    }else if(op === 2){
      setTitle("Editar Producto");
    }
  }

  useEffect(() => {
    getProducts({url ,setProducts});
  }, [products])

  const colums = [
    {
      name: "Codigo",
      selector: row => row.codigo_producto,
      sortable: true
    },
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
        name: "Stock",
        selector: row => row.cantidad_disponible,
        sortable: true
      },
      /*{
        name: "Operacion",
        cell: row => (
            <div>
              <BotonEditarEliminar borrar={handleDelete}/>
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
      }*/
        {
          name: "Operacion",
          cell: row => (
              <div>
                <BotonEditarEliminar borrar={handleDelete} editar={handleEdit} parametro={row}/>
              </div>    
          ),
          ignoreRowClick: true,
          allowOverflow: true,
          button: true,
        }
    ]
    const handleEdit = (row) => {
        setProduct(row);
        cambiarTitle(2);
        console.log("Editar:", row);
    };
    
      const handleDelete = (row) => {
        enviarSolicitud(row ,'DELETE');
        console.log("Eliminar:", row);
      };

    return (
      <div className="showProducts">
        <div className="container-fluid">
          <div className="row mt-3">
            <div className="col-md-4 offset-md-4">
              {/*Boton Añadir producto*/}
              <div className="d-grid mx-auto">
                <button onClick={() => cambiarTitle(1)} className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#modalProducts">
                  <i className="fa-solid fa-circle-plus"></i> Añadir
                </button>
              </div>
            </div>
          </div>
          {/*Tabla de productos*/}
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
        <ModalProducts title={title} producto={product} op={operacion} enviSol={enviarSolicitud}/>
        
      </div>
    );
}
export default ShowProducts