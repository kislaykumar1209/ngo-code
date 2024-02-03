import React, { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

import user from "../assets/user.webp";
import { Link, NavLink, useLocation } from "react-router-dom";


import Overview from "./about/overview";
import Missions from "./about/missions";
import Testimonial from "./about/testimonial";
import OurTeam from "./about/our-team";
import { useDispatch } from "react-redux";

const About = () => {


  const [profile, profileOpen] = useState(false);
  const [openTab, setOpenTab] = useState(1);
  // useEffect(() => {

  // }, [dispatch, openTab]);

  return (
    <>
      <nav className="sticky top-0 z-30">
        <div className="flex items-center top-0 justify-between py-2 sticky bg-[rgb(255,255,255)] shadow-lg shadow-slate-700/50">
          <h1 className=" md:text-3xl font-semibold mx-10">About</h1>{" "}
          <div className="flex relative my-auto ">
            <img
              src={user}
              className="mx-3 w-8 h-8 my-auto sm:w-16 sm:h-16 rounded-full hover:cursor-pointer sm:block"
              alt=""
              onClick={() => profileOpen(!profile)}
            />
            <div className="flex flex-col my-auto mr-10">
              <p className="text-sm md:text-lg">Mayank Jha</p>
              <p className="text-xs md:text-base mx-auto">Manager</p>
            </div>
          </div>
        </div>
      </nav>

      {/* Profile Cart */}

      <div className="flex h-full scroll-smooth">
        <div className="w-full h-full">
          <div className="flex flex-wrap">
            <div className="w-full">
              <ul
                className="flex justify-center items-center mx-6 mb-0 list-none flex-wrap pt-3 pb-4 sm:mx-12 flex-row px-4 xl:w-3/5 md:flex-nowrap"
                role="tablist"
              >
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-xs font-bold uppercase shadow-lg rounded block leading-normal " +
                      (openTab === 1
                        ? "text-white bg-blue-800"
                        : "text-black bg-white")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(1);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                  >
                    <NavLink exact to='/about' >

                      <p className="px-5 py-3">Overview</p>
                    </NavLink>
                  </a>
                </li>
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-xs font-bold uppercase shadow-lg rounded block leading-normal " +
                      (openTab === 2
                        ? "text-white bg-blue-800"
                        : "text-black bg-white")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(2);
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                  >
                    {/* <Link to='/about/mission'> */}
                    <NavLink exact to='/about/mission'>

                      <p className="px-5 py-3">Mission & Dreams</p>
                    </NavLink>
                  </a>
                </li>
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-xs font-bold uppercase  shadow-lg rounded block leading-normal " +
                      (openTab === 3
                        ? "text-white bg-blue-800"
                        : "text-black bg-white")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(3);
                    }}
                    data-toggle="tab"
                    href="#link3"
                    role="tablist"
                  >
                    <Link to='/about/our-team'>

                      <p className="px-5 py-3">Team</p>
                    </Link>
                  </a>
                </li>
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-xs font-bold uppercase shadow-lg rounded block leading-normal " +
                      (openTab === 4
                        ? "text-white bg-blue-800"
                        : "text-black bg-white")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(4);
                    }}
                    data-toggle="tab"
                    href="#link4"
                    role="tablist"
                  >
                    <Link to='/about/testimonial'>

                      <p className="px-5 py-3">Testimonial</p>
                    </Link>
                  </a>
                </li>
              </ul>
              <div className="relative flex flex-col min-w-0 break-words bg-white w-11/12 mx-auto mb-6 shadow-lg rounded">
                <div className="px-4 flex-auto">
                  <div className="tab-content tab-space">
                    <div
                      className={openTab === 1 ? "block" : "hidden"}
                      id="link1"
                    >
                      <Overview sub={"overview"} />
                    </div>
                    <div
                      className={openTab === 2 ? "block" : "hidden"}
                      id="link2"
                    >
                      <Missions sub={"mission"} />
                    </div>
                    <div
                      className={openTab === 3 ? "block" : "hidden"}
                      id="link3"
                    >
                      <OurTeam sub={"team"} />
                    </div>
                    <div
                      className={openTab === 4 ? "block" : "hidden"}
                      id="link4"
                    >
                      <Testimonial sub={"testimonial"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Dailog Box */}
    </>
  );
};

export default About;
