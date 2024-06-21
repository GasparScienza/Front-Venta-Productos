
function BotonEditarEliminar({borrar, editar, parametro}) {
    
    const handleDelete = (parametro) => {
        borrar(parametro);
    }
    const handleEdit = (parametro) => {
        editar(parametro);
    }

    return ( 
        <div>
            <button onClick={() => handleEdit(parametro)} className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalProducts">
                <i className="fas fa-solid fa-edit"></i>
            </button>
            <button onClick={() => handleDelete(parametro)} className="btn btn-danger"><i className="fas fa-solid fa-trash"></i></button>
        </div>  
     );
}

export default BotonEditarEliminar;