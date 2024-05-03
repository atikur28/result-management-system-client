import { Link, useNavigate } from "react-router-dom";
import Navbar from "../SharedPages/Navbar";
import image from "../../assets/Register/register-image.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Register = () => {
  const { createUser, loginInWithGoogle } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const axiosPublic = useAxiosPublic();

  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    setRegisterError("");

    if (password.length < 6) {
      setRegisterError("Password should be in 6 character!");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your password should have at least one upper case character!"
      );
      return;
    } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
      setRegisterError(
        "Your password should have at least one special character!"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        const userInfo = {
          name: name,
          email: email,
          role: 'user'
        };
        updateProfile(result.user, {
          displayName: name,
        })
          .then((result) => {
            console.log(result.user);
          })
          .catch((error) => {
            setRegisterError(error.message);
          });
        axiosPublic.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              title: "Good job!",
              text: "You have been registered successfully!",
              showClass: {
                popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `,
              },
              hideClass: {
                popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `,
              },
            });
            form.reset();
            navigate("/");
          }
        });
      })
      .catch((error) => {
        setRegisterError(error.message);
      });
  };

  const handleRegisterWithGoogle = () => {
    loginInWithGoogle()
      .then((result) => {
        console.log(result.user);
        const userInfo = {
          name: result?.user?.displayName,
          email: result?.user?.email,
          role: 'user'
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              title: "Good job!",
              text: "You have been registered successfully!",
              showClass: {
                popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `,
              },
              hideClass: {
                popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `,
              },
            });
            navigate("/");
          }
        });
      })
      .catch((error) => {
        setRegisterError(error.message);
      });
  };

  return (
    <div>
      <div className="bg-slate-100 drop-shadow-lg">
        <Navbar></Navbar>
      </div>
      <div className="flex flex-col md:flex-row mt-5 justify-center items-center gap-10">
        <img className="w-2/3 md:w-1/3" src={image} alt="Login Image" />
        <div className="lg:w-1/3 xl:w-1/4 drop-shadow-md shadow-md border px-2 py-5 rounded-md">
          <h2 className="text-sky-500 text-2xl font-bold text-center">
            Register to your account
          </h2>
          <form onSubmit={handleRegister}>
            <div className="mt-5">
              <h3 className="text-lg font-semibold mb-1">Your name</h3>
              <input
                className="w-full py-1.5 px-2 rounded border border-gray-300"
                placeholder="Your full name"
                type="text"
                name="name"
                required
              />
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-semibold mb-1">Your email</h3>
              <input
                className="w-full py-1.5 px-2 rounded border border-gray-300"
                placeholder="Email address"
                type="email"
                name="email"
                required
              />
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-semibold mb-1">Password</h3>
              <input
                className="w-full py-1.5 px-2 rounded border border-gray-300"
                placeholder="Password"
                type="password"
                name="password"
                required
              />
            </div>
            <div className="mx-auto mt-7">
              <button className="bg-sky-900 hover:bg-sky-900 text-white font-bold md:text-lg w-full rounded btn">
                Register
              </button>
            </div>
          </form>
          {registerError && (
            <p className="text-red-600 font-semibold text-center">
              {registerError}
            </p>
          )}
          <p className="text-center font-medium mt-3 text-gray-700 dark:text-gray-400">
            You already have an account yet!{" "}
            <Link
              to="/login"
              className="font-medium text-sky-600 hover:underline"
            >
              Login
            </Link>
          </p>
          <div className="w-max border mx-auto bg-white rounded-full mt-5 hover:bg-slate-100">
            <Link>
              <button
                onClick={handleRegisterWithGoogle}
                className="flex items-center justify-center gap-3 font-semibold py-2 w-[300px]"
              >
                <img
                  className="w-5"
                  src="https://i.ibb.co/Pj0MgcP/google.png"
                  alt=""
                />{" "}
                Register with Google
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
