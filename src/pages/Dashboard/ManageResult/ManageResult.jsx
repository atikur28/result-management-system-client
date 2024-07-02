import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
// import searchIcon from '../../../assets/svg/search.svg';
import Search from "../Search/Search";

const ManageResult = () => {
  const axiosSecure = useAxiosSecure();
  const [searchTerm, setSearchTerm] = useState('');
  const { data: results = [] } = useQuery({
    queryKey: ["manageUser"],
    queryFn: async () => {
      const res = await axiosSecure.get("/results");
      return res.data;
    },
  });

  const filteredResults = results.filter(result => 
    result.registrationNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div>
        <h2 className="text-2xl lg:text-3xl mt-5 mb-10 text-center">
          Manage Results
        </h2>
        <div className="mb-5 text-center">
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
          {/* <button
            type="button"
            className="focus:[&amp;:not(:focus-visible)]:outline-none h-8 w-full lg:max-w-md items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex mx-auto">
            <img
              src={searchIcon}
              alt="Search"
              className="h-5 w-5"
              width={50}
              height={50} />
            <input
              type="text"
              placeholder="Search by Registration No..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 focus:border-none focus:outline-none"
            />
          </button> */}
        </div>
      </div>
      {/* mobile and tab */}
      <div className="overflow-x-auto lg:hidden px-3">
        <table className="w-[600px] md:w-[700px] mx-auto">
          <thead>
            <tr className="lg:text-lg text-gray-500 font-semibold bg-base-200">
              <th className="rounded-l-md pl-5">NO</th>
              <th>Reg:</th>
              <th>Dept:</th>
              <th>Sem:</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {filteredResults.map((result, index) => (
              <tr key={result?._id}>
                <td className="font-bold pl-5">{index + 1}</td>
                <td>{result?.registrationNo}</td>
                <td>{result?.department}</td>
                <td>{result?.semester}</td>
                <td>
                  <Link to={`/dashboard/updateResult/${result?._id}`}>
                    <button className="btn bg-gray-300 hover:bg-gray-400">
                      <IoIosAddCircle size={30} className="text-green-800" />
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* laptop and bigger device */}
      <div className="overflow-x-auto hidden lg:flex">
        <table className="table">
          <thead>
            <tr className="lg:text-lg bg-base-200">
              <th>NO</th>
              <th>Reg:</th>
              <th>Dept:</th>
              <th>Sem:</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {filteredResults.map((result, index) => (
              <tr key={result?._id}>
                <td className="font-bold">{index + 1}</td>
                <td className="font-medium">{result?.registrationNo}</td>
                <td className="font-medium">{result?.department}</td>
                <td className="font-medium">{result?.semester}</td>
                <td className="font-medium">
                  <Link to={`/dashboard/updateResult/${result?._id}`}>
                    <button className="btn bg-gray-300 hover:bg-gray-400">
                      <IoIosAddCircle size={30} className="text-green-800" />
                    </button>
                  </Link>
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
