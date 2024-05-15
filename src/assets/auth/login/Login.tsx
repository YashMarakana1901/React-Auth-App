/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import useLogin from "./hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const { login, error } = useLogin();

  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const { success }: any = await login(username, password);
    if (success) {
      setLoggedIn(true);
    }
  };

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        {loggedIn ? (
          <div>
            <h1>Welcome, {username}!</h1>
            <button onClick={() => setLoggedIn(false)}>Logout</button>
          </div>
        ) : (
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900 text-left"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    autoComplete="email"
                    onChange={handleUsernameChange}
                    required
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    onChange={handlePasswordChange}
                    required
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
                {error && <p>{error}</p>}
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{" "}
              <a
                href="#"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Start a 14 day free trial
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
    // <div>
    //   {" "}
    //   {loggedIn ? (
    //     <div>
    //       <h1>Welcome, {username}!</h1>
    //       <button onClick={() => setLoggedIn(false)}>Logout</button>
    //     </div>
    //   ) : (
    //     <form onSubmit={handleSubmit} className="text-center bg-red-300">
    //       <label>
    //         Username:
    //         <input
    //           type="text"
    //           value={username}
    //           onChange={handleUsernameChange}
    //         />
    //       </label>
    //       <br />
    //       <label>
    //         Password:
    //         <input
    //           type="password"
    //           value={password}
    //           onChange={handlePasswordChange}
    //         />
    //       </label>
    //       <br />
    //       <button type="submit">Login</button>
    //       {error && <p>{error}</p>}
    //     </form>
    //   )}
    // </div>
  );
};

export default Login;
