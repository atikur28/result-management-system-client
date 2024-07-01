<<<<<<< HEAD
const ManageResult = () => {
    return (
        <div>
            
        </div>
    );
};

export default ManageResult;
=======
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const ManageResult = () => {
  const axiosSecure = useAxiosSecure();
  const { data: results = [] } = useQuery({
    queryKey: ["manageUser"],
    queryFn: async () => {
      const res = await axiosSecure.get("/results");
      return res.data;
    },
  });
  return (
    <div>
      <div>
        <h2 className="text-2xl lg:text-3xl mt-5 mb-10 text-center">
          Manage Results
        </h2>
        {/* <h2 className="text-3xl">Total Users:{users.length}</h2> */}
      </div>
      {/* mobile and tab */}
      <div className="overflow-x-auto lg:hidden px-3">
        <table className="w-[600px] md:w-[700px] mx-auto">
          {/* head */}
          <tr className="lg:text-lg text-gray-500 font-semibold bg-base-200">
            <td className="rounded-l-md pl-5">NO</td>
            <td>Reg:</td>
            <td>Dept:</td>
            <td>Sem:</td>
            <td>Update</td>
          </tr>
          {/* body */}
          {results?.map((result, index) => (
            <tr key={result?._id}>
              <td className="font-bold pl-5">{index + 1}</td>
              <td>{result?.registrationNo}</td>
              <td>{result?.department}</td>
              <td>{result?.semester}</td>
              <td>Update</td>
            </tr>
          ))}
        </table>
      </div>
      {/* laptop and bigger device */}
      <div className="overflow-x-auto hidden lg:flex">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="lg:text-lg bg-base-200">
              <th>NO</th>
              <th>Reg:</th>
              <th>Dept:</th>
              <th>Sem:</th>
              <th>Update</th>
            </tr>
          </thead>
          {/* body */}
          <tbody>
            {results?.map((result, index) => (
              <tr key={result?._id}>
                <td className="font-bold">{index + 1}</td>
                <td className="font-medium">{result?.registrationNo}</td>
                <td className="font-medium">{result?.department}</td>
                <td className="font-medium">{result?.semester}</td>
                <td className="font-medium">
                  <Link to={`/dashboard/updateResult/${result?._id}`}><button className="btn bg-gray-300 hover:bg-gray-400"><IoIosAddCircle size={30} className="text-green-800"></IoIosAddCircle></button></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageResult;
>>>>>>> 740ba6bcc7e014459e974c4796e094b86bf262ba
