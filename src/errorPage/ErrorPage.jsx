import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <img
        className="w-5/6 md:w-1/3"
        src={`https://i.ibb.co/m979Y2T/7967799-3819627.jpg`}
        alt=""
      />
      <p className="font-semibold">
        <i>404 {error.statusText || error.message}!!</i>
      </p>
      <div className="mt-5">
        <Link to="/">
          <button className="btn bg-blue-400 hover:bg-blue-400 text-white font-bold">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
