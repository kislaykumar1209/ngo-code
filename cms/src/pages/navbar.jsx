import React, { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import user from "../assets/user.webp";
import { useDispatch, useSelector } from "react-redux";
import { getLogoInfo } from "../redux/action/club/clubInfo";
import { toast } from "react-hot-toast";
import { logout } from "../redux/action/auth/auth";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from 'react-icons/rx'

export default function Navbar({ title }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [profile, profileOpen] = useState(false);
  const { loading, logo, error, message } = useSelector((state) => state.club)
  const { message: msgAuth, isAuthenticated } = useSelector((state) => state.auth)
  const Logout = (e) => {
    e.preventDefault()
    dispatch(logout())
    // dispatch({ type: 'LogoutSuccess' });
  }

  const [sidebar, setSidebar] = useState(true);
  useEffect(() => {
    if (error) {
      // toast.error(error);
      // console.log(error, "nav")
      dispatch({ type: 'clearError' });
    }
    // if (msgAuth) {
    //   toast.success(msgAuth);
    //   dispatch({ type: 'clearMessage' });
    // }
    if (!isAuthenticated) {
      navigate('/login')
    }
    dispatch(getLogoInfo())
  }, [dispatch, error, msgAuth, isAuthenticated]);



  return (
    <>
      <nav className="sticky top-0 z-30">
        <div className="flex items-center top-0 justify-between py-2 sticky bg-[rgb(255,255,255)] shadow-lg shadow-slate-700/50">
          <h1 className=" md:text-3xl font-semibold mx-10">{title}</h1>{" "}
          <div className="flex relative my-auto ">
            <img
              src={logo?.image ? `${process.env.REACT_APP_SERVER}/${logo.image}` : user}
              className="mx-3 w-8 h-8 my-auto sm:w-16 sm:h-16 rounded-full hover:cursor-pointer sm:block"
              alt=""
              onClick={() => profileOpen(!profile)}
            />
            <div className="flex flex-col my-auto mr-10">
              <p className="text-sm md:text-lg">{logo?.title ? logo.title : "Lions Club"}</p>
            </div>
          </div>
        </div>
      </nav>
      {/* Profile Cart */}
      <div
        className={`${profile ? "opacity-100 block" : "opacity-0 hidden"
          } transition-all duration-700 min-w-[16px] min-h-[16px] max-w-[calc(100%-32px)] max-h-[calc(100%-32px)] rounded-lg bg-white shadow-xl shadow-blue-600/40 border-2 border-gray-900/20 right-10 translate-y-2 absolute z-50`}
      >
        <div className="flex flex-col p-5 border-b-2 border-b-slate-500/50 justify-center items-center">
          <img
            src={logo?.image ? `${process.env.REACT_APP_SERVER}/${logo.image}` : user}
            className="mx-3 hidden w-16 h-16 rounded-full hover:cursor-pointer sm:block"
            alt=""
          />
          <h2 className="text-lg">{logo?.title}</h2>
          {/* <h3 className="text-base font-normal">mayankjha014@gmail.com</h3> */}
        </div>
        <div className="flex flex-col justify-center my-2">
          {/* <div className="hover:bg-slate-200/50 flex h-8 items-center">
            <FaRegUser className="mx-4 my-[0.1rem] w-4 text-gray-600" />
            <p className="text-base text-gray-600">Profile</p>
          </div> */}
          <div className="hover:bg-slate-200/50 flex rounded-lg h-8 items-center">
            <BiLogOut className="mx-4 my-[0.1rem] text-gray-800 w-4" />
            <p className="text-base text-gray-600" onClick={Logout}>Logout</p>
          </div>
        </div>
      </div>
    </>
  );
};


