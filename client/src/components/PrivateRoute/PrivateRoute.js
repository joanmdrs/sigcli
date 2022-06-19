import { hasAuthorization, isAuthenticated } from "../../services/LoginServices";
import {useJwt} from "react-jwt";
import { useNavigate, Navigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from "sweetalert2";

export const PrivateRoute = ({children}) => {

    const token = localStorage.getItem('token');
    const decode = useJwt(token);
    const history = useNavigate();

    
    if(isAuthenticated()){
        if(decode.decodedToken !== null && hasAuthorization(decode.decodedToken.user)){
            return children;
        }
    
    }else {
        return <Navigate to="/" replace />
    }
       
}

