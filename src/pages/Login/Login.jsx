import Navbar from "../SharedPages/Navbar";
import image from "../../assets/Login/login-image.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { login, loginInWithGoogle } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setLoginError("");

    login(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Good job!",
          text: "You have been logged in successfully!",
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
        navigate(from, {replace: true});
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    loginInWithGoogle()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Good job!",
          text: "You have been logged in successfully!",
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
        navigate(from, {replace: true});
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  return (
    <div>
      <div className="bg-slate-100 drop-shadow-lg">
        <Navbar></Navbar>
      </div>
      <div className="flex flex-col md:flex-row mt-5 justify-center items-center gap-10">
        <img className="w-2/3 md:w-1/3" src={image} alt="Login Image" />
        <div className="lg:w-1/3 xl:w-1/4 drop-shadow-md shadow-md border px-2 py-10 rounded-md">
          <h2 className="text-sky-500 text-2xl font-bold text-center">
            Login to your account
          </h2>
          <form onSubmit={handleLogin}>
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
                Login
              </button>
            </div>
          </form>
          {loginError && (
            <p className="text-red-600 font-semibold text-center">
              {loginError}
            </p>
          )}
          <p className="text-center font-medium mt-3 text-gray-700 dark:text-gray-400">
            Don’t have an account yet?{" "}
            <Link
              to="/register"
              className="font-medium text-sky-600 hover:underline"
            >
              Register
            </Link>
          </p>
          <div className="w-max border mx-auto bg-white rounded-full mt-5 hover:bg-slate-100">
            <Link>
              <button
                onClick={handleGoogleLogin}
                className="flex items-center justify-center gap-3 font-semibold py-2 w-[300px]"
              >
                <img
                  className="w-5"
                  src="https://i.ibb.co/Pj0MgcP/google.png"
                  alt=""
                />{" "}
                Login with Google
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
