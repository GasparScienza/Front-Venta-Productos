import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export function show_alerta(msj, icono, foco=''){
    onFocus(foco);
    const MySwal = withReactContent(Swal);
    MySwal.fire({
        title: msj,
        icon: icono
    });
}

function onFocus(foco){
    if(foco !== ''){
        document.getElementById(foco).focus();
    }
}