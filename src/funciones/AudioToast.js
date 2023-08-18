import { toast } from 'react-toastify';

export function audioToast(mensaje){
    toast.success(mensaje, {
        position: toast.POSITION.TOP_RIGHT
    });
}