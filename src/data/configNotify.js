import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const successNotify = (message) => {
    toast.success(message, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });
}
export const warningNotify = (message) => {
    toast.warning(message, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });
}

export const errorNotify = (message) => {
    toast.error(message, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });
}