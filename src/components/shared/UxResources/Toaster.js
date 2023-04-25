import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function showToaster(type, message) {
    const position = { position: toast.POSITION.TOP_RIGHT }
    switch (type) {
        case "info":
            toast.info(message, position);
            break;
        case "success":
            toast.success(message, position);
            break;
        case "error":
            toast.error(message, position);
            break;

        default:
            break;
    }
}
