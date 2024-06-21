import { show_alerta } from "./functions";
import axios from "axios";
import { getProducts } from "./getProducts";

export const manejarRespuesta = async (metodo, url1, parametro) => {
    try {
        const respuesta = await axios({
            method: metodo,
            url: url1,
            data: parametro
        });
        const tipo = respuesta.data.success ? 'success' : 'error';
        const msj = respuesta.data.message;
        show_alerta(msj, tipo);
    } catch (error) {
        show_alerta('Error en la solicitud', 'error');
        console.log(error);
    }
}