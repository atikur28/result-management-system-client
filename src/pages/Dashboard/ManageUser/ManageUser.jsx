import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";

const ManageUser = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["manageUser"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Make Admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${user?._id}`).then((res) => {
          // console.log(res.data);
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: "Good job!",
              text: `${user?.name} is an admin now`,
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  const handleMakeUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Make User!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/user/${user?._id}`).then((res) => {
          // console.log(res.data);
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: "Good job!",
              text: `${user?.name} is an user now`,
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  const handleMakeTeacher = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Make Teacher!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/manager/${user?._id}`).then((res) => {
          // console.log(res.data);
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: "Good job!",
              text: `${user?.name} is an Teacher now`,
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  const handleDeleteUser = (user) => {
    // console.log(user._id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user?._id}`).then((res) => {
          console.log(res);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: `${user?.name} has been removed`,
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <div>
      <div>
        <h2 className="text-2xl lg:text-3xl mt-5 mb-10 text-center">
          All Users
        </h2>
        {/* <h2 className="text-3xl">Total Users:{users.length}</h2> */}
      </div>
      {/* mobile and tab */}
      <div className="overflow-x-auto lg:hidden px-3">
        <table className="w-[600px] md:w-[700px] mx-auto">
          {/* head */}
          <tr className="lg:text-lg text-gray-500 font-semibold bg-base-200">
            <td className="rounded-l-md pl-5">NO</td>
            <td>Name</td>
            <td>Email</td>
            <td>Status</td>
            <td className="rounded-r-md">Action</td>
          </tr>
          {/* body */}
          {users?.map((user, index) => (
            <tr key={user?._id}>
              <td className="font-bold pl-5">{index + 1}</td>
              <td>{user?.name}</td>
              <td>{user?.email}</td>
              <td>
                {user?.role === "admin" && (
                  <div
                    onClick={() => handleMakeUser(user)}
                    className="flex flex-col justify-start items-start hover:cursor-pointer bg-base-200 hover:bg-base-300 rounded-lg w-[68px] p-2"
                  >
                    <MdAdminPanelSettings
                      size={30}
                      className="text-green-700 ml-2.5"
                    ></MdAdminPanelSettings>
                    <p className="text-[12px] font-medium ml-1.5">Admin</p>
                  </div>
                )}
                {user?.role === "user" && (
                  <div
                    onClick={() => handleMakeTeacher(user)}
                    className="flex flex-col justify-start items-start hover:cursor-pointer bg-base-200 hover:bg-base-300 rounded-lg w-[68px] p-2"
                  >
                    <FaUser size={25} className="text-blue-700 ml-3"></FaUser>
                    <p className="text-[12px] font-medium ml-3">User</p>
                  </div>
                )}
                {user?.role === "manager" && (
                  <div
                    onClick={() => handleMakeAdmin(user)}
                    className="flex flex-col justify-start items-start hover:cursor-pointer bg-base-200 hover:bg-base-300 rounded-lg w-[68px] p-2"
                  >
                    <FaChalkboardTeacher
                      size={25}
                      className="text-purple-700 ml-3"
                    ></FaChalkboardTeacher>
                    <p className="text-[12px] font-medium ml-1.5">Teacher</p>
                  </div>
                )}
              </td>
              <td>
                <button onClick={() => handleDeleteUser(user)} className="btn">
                  <FaTrashAlt size={20} className="text-red-600"></FaTrashAlt>
                </button>
              </td>
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
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* body */}
          <tbody>
            {users?.map((user, index) => (
              <tr key={user?._id}>
                <td className="font-bold">{index + 1}</td>
                <td className="font-medium">{user?.name}</td>
                <td className="font-medium">{user?.email}</td>
                <td>
                  {user?.role === "admin" && (
                    <div
                      onClick={() => handleMakeUser(user)}
                      className="flex flex-col justify-start items-start hover:cursor-pointer bg-base-200 hover:bg-base-300 rounded-lg w-[68px] p-2"
                    >
                      <MdAdminPanelSettings
                        size={30}
                        className="text-green-700 ml-2.5"
                      ></MdAdminPanelSettings>
                      <p className="text-[12px] font-medium ml-1.5">Admin</p>
                    </div>
                  )}
                  {user?.role === "user" && (
                    <div
                      onClick={() => handleMakeTeacher(user)}
                      className="flex flex-col justify-start items-start hover:cursor-pointer bg-base-200 hover:bg-base-300 rounded-lg w-[68px] p-2"
                    >
                      <FaUser size={25} className="text-blue-700 ml-3"></FaUser>
                      <p className="text-[12px] font-medium ml-3">User</p>
                    </div>
                  )}
                  {user?.role === "manager" && (
                    <div
                      onClick={() => handleMakeAdmin(user)}
                      className="flex flex-col justify-start items-start hover:cursor-pointer bg-base-200 hover:bg-base-300 rounded-lg w-[68px] p-2"
                    >
                      <FaChalkboardTeacher
                        size={25}
                        className="text-purple-700 ml-3"
                      ></FaChalkboardTeacher>
                      <p className="text-[12px] font-medium ml-1.5">Teacher</p>
                    </div>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="btn"
                  >
                    <FaTrashAlt size={20} className="text-red-600"></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
