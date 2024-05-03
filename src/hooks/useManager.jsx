import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useManager = () => {
    const {user, loading} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const {data: isManager, isPending: isManagerLoading} = useQuery({
        queryKey: [user?.email, 'isManager'],
        enabled: !loading,
        queryFn: async() =>{
            const res = await axiosSecure.get(`/users/manager/${user?.email}`);
            console.log(res.data);
            return res.data?.isManager;
        }
    })
    return [isManager, isManagerLoading]
};

export default useManager;