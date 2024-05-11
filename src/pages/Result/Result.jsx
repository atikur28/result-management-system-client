import { useState } from "react";
import Navbar from "../SharedPages/Navbar";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import CalculateCGPA from "./CalculateCGPA/CalculateCGPA";

const Result = () => {
  const [searched, setSearched] = useState(false);
  const [searchedData, setSearchedData] = useState([]);
  // const [subjectsData, setSubjectsData] = useState("");

  const axiosPublic = useAxiosPublic();

  const { data: results = [], refetch } = useQuery({
    queryKey: ["results"],
    queryFn: async () => {
      const res = await axiosPublic.get("/results");
      return res.data;
    },
  });

  const handleResultSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const registration = form.registrationNo.value;
    const session = form.session.value;
    const department = form.department.value;
    const semester = form.semester.value;

    setSearched(true);
    const filteredData = results.filter(
      (data) =>
        data?.registrationNo === registration &&
        data?.session === session &&
        data?.department === department &&
        data?.semester === semester
    );
    setSearchedData(filteredData);
    form.reset();
  };

  const handleGoToSearch = () => {
    setSearched(false);
    setSearchedData([]);
    refetch();
  };

  // const calculateGPA = (subjects) => {
  //   subjects?.forEach(data => setSubjectsData(data));
  // }

  // console.log(subjectsData);

  return (
    <div className="mb-10">
      <div className="bg-slate-100 drop-shadow-lg">
        <Navbar></Navbar>
      </div>
      {!searched && (
        <form
          onSubmit={handleResultSearch}
          className="w-11/12 md:w-11/12 lg:w-3/4 xl:w-1/2 mx-auto my-10 md:my-20 bg-gray-100 px-2 md:px-10 lg:px-20 pt-5 pb-10 rounded-xl"
        >
          <h2 className="text-2xl text-center font-semibold text-gray-500 mb-5">
            Search Result
          </h2>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <h3 className="text-lg font-semibold mb-1">Registration NO</h3>
              <input
                className="w-full py-1.5 px-2 rounded border border-gray-300"
                placeholder="Registration no."
                type="text"
                name="registrationNo"
                required
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Session</h3>
              <input
                className="w-full py-1.5 px-2 rounded border border-gray-300"
                placeholder="2019-20"
                type="text"
                name="session"
                required
              />
            </div>
          </div>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <h3 className="text-lg font-semibold mb-1">Department</h3>
              <select
                className="w-full py-1.5 px-2 rounded border border-gray-300"
                name="department"
                required
              >
                <option disabled selected>
                  Choose department
                </option>
                <option value="CSE">CSE department</option>
                <option value="BBA">BBA department</option>
                <option value="LLB">LLB department</option>
                <option value="EEE">EEE department</option>
                <option value="ECE">ECE department</option>
              </select>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Semester</h3>
              <select
                className="w-full py-1.5 px-2 rounded border border-gray-300"
                name="semester"
                required
              >
                <option disabled selected>
                  Choose semester
                </option>
                <option value="1">First semester</option>
                <option value="2">Second semester</option>
                <option value="3">Third semester</option>
                <option value="4">Fourth semester</option>
                <option value="5">Fifth semester</option>
                <option value="6">Sixth semester</option>
                <option value="7">Seventh semester</option>
                <option value="8">Eighth semester</option>
              </select>
            </div>
          </div>
          <div className="w-max mt-7">
            <button className="bg-sky-700 hover:bg-sky-800 text-white font-bold md:text-lg w-full rounded btn btn-md">
              Search
            </button>
          </div>
        </form>
      )}
      {searched &&
        searchedData?.map((data, index) => (
          <CalculateCGPA key={index} subjects={data.subjects}></CalculateCGPA>
        ))}
      {searched && (
        <div className="w-max mx-auto mt-5">
          <button onClick={handleGoToSearch} className="btn btn-success">
            Go To Search
          </button>
        </div>
      )}
    </div>
  );
};

export default Result;
