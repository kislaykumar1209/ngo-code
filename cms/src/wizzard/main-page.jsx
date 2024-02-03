import React, { useEffect, useState } from "react";
import BannerWiz from "./banner";
import EventsWiz from "./eventeswiz";
import GloablCauseWiz from "./global_causes";
import Image from "../assets/lionsclub.png";
import PersonalDetail from "./personal_detail";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { loadUser, login } from "../redux/action/auth/auth";

const WizardPage = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [openTab, setTab] = useState(0);
  const [tab, settab] = useState(0);
  // const { info, loading, logo, error, message } = useSelector((state) => state.club)
  const { isAuthenticated } = useSelector((state) => state.auth)
  const nextTab = () => {
    // let newIndex = openTab === 3 ? 3 : openTab + 1;
    let newIndex = openTab + 1;
    setTab(newIndex);
  };
  const prevTab = () => {
    let newIndex = openTab === 0 ? 0 : openTab - 1;
    setTab(newIndex);
  };
  if (openTab == 1) {

    window.location.reload(false)

  }
  ;
  console.log("wizz")

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login')
    }
    // dispatch(loadUser())
  }, []);
  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-gradient-to-t from-purple-900 to-indigo-700">
      <img src={Image} className="absolute" alt="" />
      <div className="container1 rounded-2xl border-2 border-gray-100/50">
        <div className="p-5 h-full">
          <h1 className="text-2xl font-bold mx-auto text-center">Club Information</h1>
          <div className="mt-8 p-4 h-[80%]">
            <div className="h-full overflow-y-scroll overflow-x-hidden p-2 scro">
              <div className={" " + (openTab === 0 ? "block" : "hidden")}>
                <PersonalDetail />
              </div>
              {/* <div className={" " + (openTab === 1 ? "block" : "hidden")}>
                <BannerWiz />
              </div>
              <div className={" " + (openTab === 2 ? "block" : "hidden")}>
                <GloablCauseWiz />
              </div>
              <div className={" " + (openTab === 3 ? "block" : "hidden")}>
                <EventsWiz />
              </div> */}
              {/* <div className="flex flex-col h-full md:flex-row"></div> */}
            </div>
            <div className="flex p-2 justify-end  bottom-4">

              <button
                className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
            hover:bg-teal-600  
            bg-teal-600 
            text-teal-100 
            border duration-200 ease-in-out 
            border-teal-600 transition"
                onClick={nextTab}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WizardPage;
