import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import useManager from "../hooks/useManager";

const ManagerRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isManager, isManagerLoading] = useManager();
    if(loading || isManagerLoading){
        return (
            <div className="h-[50vh] flex justify-center items-center">
                <span className="loading loading-ring loading-lg"></span>
            </div>
        );
    }

    if(user && isManager){
        return children
    }

    return <Navigate to="/"></Navigate>
};

ManagerRoute.propTypes = {
    children: PropTypes.node,
}

export default ManagerRoute;