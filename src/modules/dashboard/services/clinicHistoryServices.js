import { useRouter } from "vue-router";
import Swal from "sweetalert2";
import axios from "axios";
import { API_URL } from "../../../constants/apiURL";

const router = useRouter()

export const deleteClinicHistory = async (id, fn) => {
    try {
        await axios.delete(API_URL + '/clinic-histories/' + id)
        Swal.fire({
            title: "¡Hecho!",
            text: "Historia eliminada correctamente.",
            icon: "success"
        });
        setTimeout(()=>{
            fn()
        }, 2000)
    } catch (error) {
        console.error(error)
        Swal.fire({
            title: "Error",
            text: "Hubo un problema en el servidor.",
            icon: "error"
        });
    }
}