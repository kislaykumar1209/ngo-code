import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import user from "../assets/user.webp";
import UpcomingEvents from "./events/upcoming-events";
import ComeLion from "./events/comelion";
import { Link } from "react-router-dom";
import PhotoGallery from "./events/photo-gallrey";

const Events = () => {
  const [profile, profileOpen] = useState(false);
  const [openTab, setOpenTab] = useState(1);

  return (
    <>
      <nav className="sticky top-0 z-30">
        <div className="flex items-center top-0 justify-between py-2 sticky bg-[rgb(255,255,255)] shadow-lg shadow-slate-700/50">
          <h1 className=" md:text-3xl font-semibold mx-10">Events</h1>{" "}
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
                    <Link to='/events'>

                      <p className="px-5 py-3">Upcoming Events</p>
                    </Link>
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
                    <Link to='/events/comelion'>
                      <p className="px-5 py-3">Come Be a Lion</p>
                    </Link>
                  </a>
                </li>
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-xs font-bold uppercase shadow-lg rounded block leading-normal " +
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
                    <Link to='/events/photo-gallery'>
                      <p className="px-5 py-3">Gallery</p>
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
                      <UpcomingEvents />
                    </div>
                    <div
                      className={openTab === 2 ? "block" : "hidden"}
                      id="link2"
                    >
                      <ComeLion />
                    </div>
                    <div
                      className={openTab === 3 ? "block" : "hidden"}
                      id="link3"
                    >
                      <PhotoGallery />
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

export default Events;
