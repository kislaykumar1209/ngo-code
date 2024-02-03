import React, { useState, useEffect } from "react";

import { Link, NavLink, useNavigate } from "react-router-dom";

// import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, register, } from "../redux/action/auth/auth";
import { toast } from "react-hot-toast";
import Loader from "./Loader/Loader";
const Register = () => {
    const dispatch = useDispatch();

    //   const alert = useAlert();
    const history = useNavigate();

    const { error, loading, isAuthenticated } = useSelector(
        (state) => state.auth
    );

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const loginSubmit = (e) => {
        e.preventDefault();
        // console.log("Form SUbmitted Login");
        dispatch(register(loginEmail, loginPassword));
    };

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }



        if (isAuthenticated) {
            // console.log("SHi hai be");
            if (!loading) {
                history("/");
            }
        }

        // dispatch(loadUser())
    }, [dispatch, error, history, isAuthenticated]);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <div className="flex h-screen bg-gray-100">
                        <div className="w-full max-w-lg m-auto bg-indigo-100 rounded-2xl p-5">
                            <header className="mx-auto bg-transparent static shadow-none min-w-max">
                                <h1 className="w-60 mx-auto mb-5 text-indigo-700 font-black text-4xl font-serif">  Register </h1>              </header>
                            <form onSubmit={loginSubmit}>
                                <div>
                                    <label className="block mb-2 text-indigo-500" for="username">
                                        Username
                                    </label>
                                    <input
                                        className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300 rounded-xl"
                                        name="email"
                                        type="text"
                                        required
                                        value={loginEmail}
                                        onChange={(e) => setLoginEmail(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-indigo-500" for="password">
                                        Password
                                    </label>
                                    <input
                                        className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300 rounded-xl"
                                        name="password"
                                        type="password"
                                        required
                                        value={loginPassword}
                                        onChange={(e) => setLoginPassword(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <input
                                        name="Log In"
                                        className="w-full bg-indigo-700 hover:bg-yellow-400 text-white font-bold py-2 px-4 mb-6 rounded-xl shadow-lg shadow-indigo-300"
                                        type="submit"
                                    />
                                </div>
                            </form>
                            <footer>
                                {/* <a
                  className="text-indigo-700 hover:text-yellow-400 text-sm float-left py-4"
                  href="#"
                >
                  ?
                </a> */}
                                <Link
                                    className="text-indigo-700 hover:text-yellow-400 text-sm float-right py-4"
                                    to="/login"
                                >
                                    Login
                                </Link>
                            </footer>
                        </div>
                    </div>


                </>
            )}
        </>
    )
}

export default Register