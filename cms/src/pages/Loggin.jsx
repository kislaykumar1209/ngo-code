import React, { useState, useEffect } from "react";

import { Link, NavLink, useNavigate } from "react-router-dom";

// import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, login } from "../redux/action/auth/auth";
import { toast } from "react-hot-toast";
import Loader from "./Loader/Loader";

// import { UserContext } from "../App"

const Loggin = () => {
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
        dispatch(login(loginEmail, loginPassword));
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
        // else {
        //   history("/login");
        // }
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
                                <h1 className="w-60 mx-auto mb-5 text-blue-700 font-black text-4xl font-serif"> Login CMS</h1>              </header>
                            <form onSubmit={loginSubmit}>
                                <div>
                                    <label className="block mb-3 text-xl text-blue-500" for="username">
                                        Username
                                    </label>
                                    <input
                                        className="w-full p-2 mb-6 text-blue-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300 rounded-xl"
                                        name="email"
                                        type="text"
                                        required
                                        value={loginEmail}
                                        onChange={(e) => setLoginEmail(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="block mb-4 text-blue-500 text-xl" for="password">
                                        Password
                                    </label>
                                    <input
                                        className="w-full p-2 mb-10 text-blue-700 border-b-2 border-blue-500 outline-none focus:bg-gray-300 rounded-xl"
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
                                        className="w-full text-xl bg-blue-700 hover:bg-yellow-400 text-white font-bold py-3 px-3 mb-6 rounded-3xl shadow-lg shadow-indigo-300"
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
                                {/* <Link
                  className="text-indigo-700 hover:text-yellow-400 text-sm float-right py-4"
                  to="/register"
                >
                  Create Account
                </Link> */}
                            </footer>
                        </div>
                    </div>


                </>
            )}
        </>
    );
};

export default Loggin;
